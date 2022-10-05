require([
  "esri/config",
  "esri/Map",
  "esri/views/SceneView",
  "esri/core/watchUtils",

  "esri/Basemap",
  "esri/layers/TileLayer",
  "esri/layers/WMTSLayer",
  "esri/widgets/Search",
  "esri/geometry/support/webMercatorUtils"
], function (esriConfig, Map, SceneView, watchUtils, Basemap, TileLayer, WMTSLayer, Search, webMercatorUtils) {

  esriConfig.apiKey = "AAPK9f8135a480454ea4b70232ccf6a79b04DEexFeYOe35LNlHDY3w4Kx1ZcFXzRnHsfCa6K3dH9eHIp_ESWxamC0WaKNxqdvLf";

  function changeBasemap(id) {
    const Layer = new WMTSLayer({
      portalItem: {
        id: String(id)
      }
    })

    const basemap = new Basemap({
      baseLayers: [
        Layer,
      ]
    });

    return basemap
  }

  //2D巡查
  const layer = new TileLayer({
    url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer"
  });

  const toggleBasemap = new Basemap({
    baseLayers: [
      layer,
    ]
  });
  $('#position').on('click', '#Tog', function () {
    if ($(this).attr('status') == '1') {
      targetWindowMap.basemap = changeBasemap('8dcb11bfabb2493b893e5be933fcea3d')
      $(this).attr('status', '2')
      $('#toggle-img').attr('src', '../static/logo/badge-3d-fill.svg')
    } else {
      targetWindowMap.basemap = toggleBasemap
      $(this).attr('status', '1')
      $('#toggle-img').attr('src', '../static/logo/badge-3d.svg')
    }
  })

  const targetWindowMap = new Map({
    basemap: toggleBasemap,
    ground: "world-elevation",
  });

  const targetWindowView = new SceneView({
    container: "targetWindow",
    map: targetWindowMap,
    center: [104.15442473620293, 35.943228829155416],
    zoom: 15
  });

  const referenceWindowMap = new Map({
    basemap: changeBasemap('8dcb11bfabb2493b893e5be933fcea3d'),
    ground: "world-elevation",
  });
  const referenceWindowView = new SceneView({
    map: referenceWindowMap,
    container: "referenceWindow",
    center: [104.15442473620293, 35.943228829155416],
    zoom: 15,
    ui: {
      components: []
    },
    popup: {
      dockOptions: {
        position: "top-left"
      }
    }
  });

  //1.同步对比功能

  referenceWindowView.on(["drag", "mouse-wheel"], function (event) {
    event.stopPropagation()
  });
  //referenceWindow通过targetWindow来控制地图移动
  targetWindowView.when(function () {
    referenceWindowView.when(function () {
      watchUtils.watch(targetWindowView, "extent", function (extent) {
        //stationary表示targetWindowView中的地图移动完毕
        if (targetWindowView.stationary) {
          //将显示中心同步
          referenceWindowView.goTo({
            center: targetWindowView.center
          })
        }
        //两个对比窗口的显示范围同步
        referenceWindowView.extent = extent
      })
    })
  });

  //2.地点搜索功能

  const search = new Search({  //Add Search widget
    view: targetWindowView
  });
  targetWindowView.ui.add(search, "top-right");
  /*view.watch("center",function(newValue,oldValue,zoom){
    console.log(zoom + " changed from " + oldValue + "to" + newValue)
    console.log(oldValue)
  })*/

  //3.经纬度获取

  targetWindowView.on("click", function (e) {
    geom = webMercatorUtils.xyToLngLat(e.mapPoint.x, e.mapPoint.y);
    $('.pos:eq(0)').val(geom[0])
    $('.pos:eq(1)').val(geom[1])
    $('.pos:eq(2)').val(targetWindowView.zoom)
  });

  //4.年份切换

  $('body').on('click', '#years .year', function () {
    $(this).addClass('active').siblings().removeClass('active')
    targetWindowMap.basemap = changeBasemap($(this).attr('id'))
  })

  $('body').on('click', '#years_right .year', function () {
    $(this).addClass('active').siblings().removeClass('active')
    referenceWindowMap.basemap = changeBasemap($(this).attr('id'))
  })

  //5.截图功能

  // the button that triggers area selection mode
  const screenshotBtn = document.getElementById("screenshotBtn");

  // the orange mask used to select the area
  const maskDiv = document.getElementById("maskDiv");

  // element where we display the print preview
  const screenshotDiv = document.getElementById("screenshotDiv");

  // the button that triggers download
  const downloadBtn = document.getElementById("downloadBtn");

  // the button to hide the print preview html element
  const closeBtn = document.getElementById("closeBtn");

  // replace the navigation elements with screenshot area selection button
  //view.ui.empty("top-left");
  targetWindowView.ui.add(screenshotBtn, "bottom-left");

  // add an event listener to trigger the area selection mode
  screenshotBtn.addEventListener("click", () => {
    screenshotBtn.classList.add("active");
    targetWindowView.container.classList.add("screenshotCursor");
    let area = null;

    // listen for drag events and compute the selected area
    const dragHandler = targetWindowView.on("drag", (event) => {
      // prevent navigation in the view
      event.stopPropagation();

      // when the user starts dragging or is dragging
      if (event.action !== "end") {
        // calculate the extent of the area selected by dragging the cursor
        const xmin = clamp(Math.min(event.origin.x, event.x), 0, targetWindowView.width);
        const xmax = clamp(Math.max(event.origin.x, event.x), 0, targetWindowView.width);
        const ymin = clamp(Math.min(event.origin.y, event.y), 0, targetWindowView.height);
        const ymax = clamp(Math.max(event.origin.y, event.y), 0, targetWindowView.height);
        if (parseInt($('#compare').attr('status')) === 1) {
          area = {
            x: xmin,
            y: ymin + 45,
            width: xmax - xmin,
            height: ymax - ymin
          };
        } else {
          area = {
            x: xmin + 138,
            y: ymin + 45,
            width: xmax - xmin,
            height: ymax - ymin
          };
        }
        // set the position of the div element that marks the selected area
        setMaskPosition(area);
      }
      // when the user stops dragging
      else {
        // remove the drag event listener from the SceneView
        dragHandler.remove();
        // the screenshot of the selected area is taken
        targetWindowView.takeScreenshot({ area: area, format: "png" }).then((screenshot) => {
          // display a preview of the image
          showPreview(screenshot);

          // create the image for download
          downloadBtn.onclick = () => {
            const text = document.getElementById("textInput").value;
            const Layer = new WMTSLayer({
              portalItem: {
                id: String($('.active').attr('id'))
              }
            })
            // if a text exists, then add it to the image
            if (text) {
              const dataUrl = getImageWithText(screenshot, text);
              downloadImage(`${text}.png`, dataUrl);
            }
            // otherwise download only the webscene screenshot
            else {
              downloadImage(`${Layer.portalItem.title}.png`, screenshot.dataUrl);
            }
          };

          // the screenshot mode is disabled
          screenshotBtn.classList.remove("active");
          targetWindowView.container.classList.remove("screenshotCursor");
          setMaskPosition(null);
        });
      }
    });

    function setMaskPosition(area) {
      if (area) {
        maskDiv.classList.remove("hide");
        maskDiv.style.left = `${area.x}px`;
        maskDiv.style.top = `${area.y}px`;
        maskDiv.style.width = `${area.width}px`;
        maskDiv.style.height = `${area.height}px`;
      } else {
        maskDiv.classList.add("hide");
      }
    }

    function clamp(value, from, to) {
      return value < from ? from : value > to ? to : value;
    }
  });

  // creates an image that will be appended to the DOM
  // so that users can have a preview of what they will download
  function showPreview(screenshot) {
    screenshotDiv.classList.remove("hide");
    // add the screenshot dataUrl as the src of an image element
    const screenshotImage = document.getElementsByClassName("js-screenshot-image")[0];
    screenshotImage.width = screenshot.data.width;
    screenshotImage.height = screenshot.data.height;
    screenshotImage.src = screenshot.dataUrl;
  }

  // returns a new image created by adding a custom text to the webscene image
  function getImageWithText(screenshot, text) {
    const imageData = screenshot.data;

    // to add the text to the screenshot we create a new canvas element
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = imageData.height;
    canvas.width = imageData.width;

    // add the screenshot data to the canvas
    context.putImageData(imageData, 0, 0);
    context.font = "20px Arial";
    context.fillStyle = "#000";
    context.fillRect(0, imageData.height - 40, context.measureText(text).width + 20, 30);

    // add the text from the textInput element
    context.fillStyle = "#fff";
    context.fillText(text, 10, imageData.height - 20);

    return canvas.toDataURL();
  }

  function downloadImage(filename, dataUrl) {
    // the download is handled differently in Microsoft browsers
    // because the download attribute for <a> elements is not supported
    if (!window.navigator.msSaveOrOpenBlob) {
      // in browsers that support the download attribute
      // a link is created and a programmatic click will trigger the download
      const element = document.createElement("a");
      element.setAttribute("href", dataUrl);
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } else {
      // for MS browsers convert dataUrl to Blob
      const byteString = atob(dataUrl.split(",")[1]);
      const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });

      // download file
      window.navigator.msSaveOrOpenBlob(blob, filename);
    }
  }
  // hide the print preview html element on click
  closeBtn.addEventListener("click", () => {
    screenshotDiv.classList.add("hide");
  });
  //6.界面交互
  $('#logout').on('click', function () {
    location.href = '/'
  })
  function getLocaldata() {
    $.ajax({
      url: '/get/',
      type: 'get',
      async: false,
      success: function (data) {
        let Data = data['data']
        if (Data) {
          localStorage.setItem('data', JSON.stringify(Data))
        } else {
          let arr = [
            { name: '创建您的任务', longitude: 100, latitude: 40, zoom: 5 },
          ]
          localStorage.setItem('data', JSON.stringify(arr))
        }
      }
    })
    return localStorage.getItem('data')
  }
  let arr = JSON.parse(getLocaldata())
  function render() {
    $('#missions').empty()
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.length >= 6) {
        const $info = $('<div class="Mission"><div id="' + (i + 1) + '" class="missionName" lon="' + arr[i].longitude + '" lat="' + arr[i].latitude + '" zoom="' + arr[i].zoom + '" name="' + arr[i].name + '">' + arr[i].name.slice(0, 6) + '...</div><div id="' + i + '" class="del">X</div></div>')
        $('#missions').append($info)
      } else {
        const $info = $('<div class="Mission"><div id="' + (i + 1) + '" class="missionName" lon="' + arr[i].longitude + '" lat="' + arr[i].latitude + '" zoom="' + arr[i].zoom + '" name="' + arr[i].name + '">' + arr[i].name + '</div><div id="' + i + '" class="del">X</div></div>')
        $('#missions').append($info)
      }
    }
    $('#1').addClass('act')
  }
  render()
  $('.line:eq(3)').on('click', '#add', function () {
    let miss = {
      name: $('#Name').val(),
      longitude: $('#Lon').val(),
      latitude: $('#Lat').val(),
      zoom: $("#Zoom option:selected").text(),
    }
    if (miss.name != '' && miss.longitude != '' && miss.latitude != '') {
      arr.push(miss)
      $.ajax({
        url: '/add/',
        type: 'POST',
        data: { 'arr': JSON.stringify(arr) },
        success: function (data) {
        }
      })
      localStorage.setItem('data', JSON.stringify(arr))
      $('#missions').empty()
      render()
      $('#Name').val('')
      $('#Lon').val('')
      $('#Lat').val('')
      $('#Zoom').val('1')
      $('#option').css('display', 'none')
    } else {
      alert('关键内容不能为空')
    }
  })
  $('.line:eq(3)').on('click', '#cancel', function () {
    $('#Name').val('')
    $('#Lon').val('')
    $('#Lat').val('')
    $('#Zoom').val('1')
    $('#option').css('display', 'none')
  })
  $('#position').on('click', '#addMission', function () {
    $('#option').css('display', 'block')
  })

  $('#missionList_landform').on('click', '#addMission_landform', function () {
    $('#option').css('display', 'block')
  })
  $('#missionList_identify').on('click', '#addMission_identify', function () {
    $('#option').css('display', 'block')
  })
  $('#function').on('click', '#missionList', function (e) {
    if (e.target.className === 'del') {
      $('#del-confirm').css('display', 'block')
      arr.splice(e.target.id, 1)
      $('#del-y').on('click', function () {
        $.ajax({
          url: '/delete/',
          type: 'POST',
          data: { 'arr': JSON.stringify(arr) },
          success: function (data) {
          }
        })
        localStorage.setItem('data', JSON.stringify(arr))
        render()
        $('#del-confirm').css('display', 'none')
      })
      $('#del-n').on('click', function () {
        $('#del-confirm').css('display', 'none')
      })
    }
  })
  $('#missions').on('click', '.missionName', function () {
    $(this).addClass('act').parents().siblings().children().removeClass('act')
    targetWindowView.center = [parseFloat($(this).attr('lon')), parseFloat($(this).attr('lat'))]
    targetWindowView.zoom = parseInt($(this).attr('zoom'))
    referenceWindowView.center = [parseFloat($(this).attr('lon')), parseFloat($(this).attr('lat'))]
    referenceWindowView.zoom = parseInt($(this).attr('zoom'))
  })
  $('#compare').on('click', function () {
    if (parseInt($(this).attr('status')) == '1') {
      $('#years').css('display', 'block')
      $('#years_right').css('display', 'block')
      $('#referenceWindow').attr('id', 'referenceWindow1')
      $('#targetWindow').attr('id', 'targetWindow1')
      $('#main').css({ 'margin-right': '308px', 'margin-left': '138px' })
      $(this).attr('status', '2')
      $(this).children('span').text('取消对比')
    } else if (parseInt($(this).attr('status')) == '2') {
      $('#years').css('display', 'none')
      $('#years_right').css('display', 'none')
      $('#referenceWindow1').attr('id', 'referenceWindow')
      $('#targetWindow1').attr('id', 'targetWindow')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '0' })
      $(this).attr('status', '1')
      $(this).children('span').text('时间戳对比')
    } else {
      $('#years').css('display', 'none')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '0' })
      $(this).attr('status', '1')
    }

  })
  $('#Browse').on('click', function () {
    $('#AI_landform').css('display', 'none')
    $('#AI_recognize').css('display', 'none')
    $('#position').css('display', 'block')
    $('#content').css('height', '629px')
    if ($('#Tog').attr('status') == '2') {
      $('#Tog').click()
    }
    if ($('#function').attr('status') === '2') {
      $('#function').css('display', 'none')
      $('#main').css('margin-right', '0')
      $('#function').attr('status', '1')
    }
    if ($('#compare').attr('status') === '2') {
      $('#years').css('display', 'none')
      $('#years_right').css('display', 'none')
      $('#referenceWindow1').attr('id', 'referenceWindow')
      $('#targetWindow1').attr('id', 'targetWindow')
      $('#main').css({ 'margin-right': '0', 'margin-left': '0' })
      $('#compare').attr('status', '1')
    } else if ($('#compare').attr('status') === '3') {
      $('#years').css('display', 'none')
      $('#main').css({ 'margin-right': '0', 'margin-left': '0' })
      $('#compare').attr('status', '1')
    }
  })
  $('#Missions').on('click', function () {
    $('#AI_landform').css('display', 'none')
    $('#AI_recognize').css('display', 'none')
    $('#position').css('display', 'none')
    $('#content').css('height', '668px')
    if ($('#Tog').attr('status') == '1') {
      $('#Tog').click()
    }
    if ($('#function').attr('status') === '1') {
      $('#function').css('display', 'block')
      $('#main').css('margin-right', '170px')
      $('#function').attr('status', '2')
    }
    if ($('#compare').attr('status') === '2') {
      $('#years').css('display', 'none')
      $('#years_right').css('display', 'none')
      $('#referenceWindow1').attr('id', 'referenceWindow')
      $('#targetWindow1').attr('id', 'targetWindow')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '0' })
      $('#compare').attr('status', '1')
    } else if ($('#compare').attr('status') === '3') {
      $('#years').css('display', 'none')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '0' })
      $('#compare').attr('status', '1')
    }
    $('#missions').css('height', '94%')
    $('#compare').css('display', 'block')
  })
  $('.nav').hover(
    function () { $(this).children('div').css('display', 'block') },
    function () { $(this).children('div').css('display', 'none') }
  )
  $('#AI_recognize').css('display', 'none')
  $('#AI_landform').css('display', 'none')
  $('.close').on('click', function () {
    $(this).parent().animate({
      opacity: 0
    }, 100, 'swing', function () {
      $(this).css('display', 'none')
    })
  })
  $('#landform').on('click', function () {
    $('#AI_recognize').css('display', 'none')
    $('#position').css('display', 'none')
    $('#content').css('height', '668px')
    if ($('#Tog').attr('status') == '1') {
      $('#Tog').click()
    }
    if ($('#function').attr('status') === '1') {
      $('#function').css('display', 'block')
      $('#main').css('margin-right', '170px')
      $('#function').attr('status', '2')
    }
    if ($('#compare').attr('status') === '1') {
      $('#years').css('display', 'block')
      $('#years_right').css('display', 'block')
      $('#referenceWindow').attr('id', 'referenceWindow1')
      $('#targetWindow').attr('id', 'targetWindow1')
      $('#main').css({ 'margin-right': '308px', 'margin-left': '138px' })
      $('#compare').attr('status', '2')
    } else if ($('#compare').attr('status') === '3') {
      $('#years_right').css('display', 'block')
      $('#referenceWindow').attr('id', 'referenceWindow1')
      $('#targetWindow').attr('id', 'targetWindow1')
      $('#main').css({ 'margin-right': '308px', 'margin-left': '138px' })
      $('#compare').attr('status', '2')
    }
    $('#missions').css('height', '100%')
    $('#compare').css('display', 'none')
    $('#AI_landform').css('display', 'block')
    $('#AI_landform').animate({
      opacity: 1
    }, 100, 'swing', function () {
    })
    $('#4').click()
  })
  $('#identify').on('click', function () {
    $('#AI_landform').css('display', 'none')
    $('#position').css('display', 'none')
    $('#content').css('height', '668px')
    if ($('#Tog').attr('status') == '1') {
      $('#Tog').click()
    }
    if ($('#function').attr('status') === '1') {
      $('#function').css('display', 'block')
      $('#main').css('margin-right', '170px')
      $('#function').attr('status', '2')
    }
    if ($('#compare').attr('status') === '1') {
      $('#years').css('display', 'block')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '138px' })
      $('#compare').attr('status', '3')
    } else if ($('#compare').attr('status') === '2') {
      $('#years_right').css('display', 'none')
      $('#referenceWindow1').attr('id', 'referenceWindow')
      $('#targetWindow1').attr('id', 'targetWindow')
      $('#main').css({ 'margin-right': '170px', 'margin-left': '138px' })
      $('#compare').attr('status', '3')
    }
    $('#missions').css('height', '100%')
    $('#compare').css('display', 'none')
    $('#AI_recognize').css('display', 'block')
    $('#AI_recognize').animate({
      opacity: 1
    }, 100, 'swing', function () {
    })
    $('#3').click()
  })
});