require([
  "esri/config",
  "esri/Map",
  "esri/views/SceneView",
  "esri/core/watchUtils",

  "esri/Basemap",
  "esri/layers/WMTSLayer",
  "esri/widgets/Search",
  "esri/geometry/support/webMercatorUtils"
], function (esriConfig, Map, SceneView, watchUtils, Basemap, WMTSLayer, Search, webMercatorUtils) {

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

  const targetWindowMap = new Map({
    basemap: changeBasemap('8dcb11bfabb2493b893e5be933fcea3d'),
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

  const search = new Search({  //Add Search widget
    view: targetWindowView
  });
  targetWindowView.ui.add(search, "top-right");
  /*view.watch("center",function(newValue,oldValue,zoom){
    console.log(zoom + " changed from " + oldValue + "to" + newValue)
    console.log(oldValue)
  })*/
  targetWindowView.on("click", function (e) {
    geom = webMercatorUtils.xyToLngLat(e.mapPoint.x, e.mapPoint.y);
    $('.pos:eq(0)').val(geom[0])
    $('.pos:eq(1)').val(geom[1])
  });

  $('body').on('click', '#years .year', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $(this).css('backgroundColor', 'rgb(177, 174, 174)').siblings().css('backgroundColor', 'rgb(241, 236, 236)')
    targetWindowMap.basemap = changeBasemap($(this).attr('id'))
  })

  $('body').on('click', '#years_right .year', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $(this).css('backgroundColor', 'rgb(177, 174, 174)').siblings().css('backgroundColor', 'rgb(241, 236, 236)')
    referenceWindowMap.basemap = changeBasemap($(this).attr('id'))
  })

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
        area = {
          x: xmin + 140,
          y: ymin,
          width: xmax - xmin,
          height: ymax - ymin
        };
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
  //功能区交互
  $('#logout').on('click', function () {
    location.href = '/'
  })
  function getLocaldata() {
    $.ajax({
      url: '/get/',
      type: 'get',
      success: function (data) {
        let Data = data['data']
        if (Data) {
          localStorage.setItem('data', JSON.stringify(Data))
        } else {
          let arr = [
            { name: 'mission1', longitude: 100, latitude: 40, zoom: 5 },
            { name: 'mission2', longitude: 100, latitude: 40, zoom: 5 }
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
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.length >= 6) {
        const $info = $('<div class="Mission"><div id="' + (i + 1) + '" class="missionName" lon="' + arr[i].longitude + '" lat="' + arr[i].latitude + '" zoom="' + arr[i].zoom + '" name="' + arr[i].name + '">' + arr[i].name.slice(0, 6) + '...</div><div id="' + i + '" class="del">X</div></div>')
        $('#missions').append($info)
      } else {
        const $info = $('<div class="Mission"><div id="' + (i + 1) + '" class="missionName" lon="' + arr[i].longitude + '" lat="' + arr[i].latitude + '" zoom="' + arr[i].zoom + '" name="' + arr[i].name + '">' + arr[i].name + '</div><div id="' + i + '" class="del">X</div></div>')
        $('#missions').append($info)
      }
    }
  }
  render()
  $('.line:eq(3)').on('click', '#add', function () {
    $('#missions').empty()
    let miss = {
      name: $('#Name').val(),
      longitude: $('#Lon').val(),
      latitude: $('#Lat').val(),
      zoom: $("#Zoom option:selected").text(),
    }
    console.log(arr)
    console.log(miss)
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
  $('#missionList').on('click', '#addMission', function () {
    $('#option').css('display', 'block')
  })
  $('#function').on('click', '#mission', function () {
    $('#missionList').slideToggle(100)
  })
  $('#function').on('click', '#missionList', function (e) {
    if (e.target.className === 'del') {
      arr.splice(e.target.id, 1)
      $.ajax({
        url: '/delete/',
        type: 'POST',
        data: { 'arr': JSON.stringify(arr) },
        success: function (data) {
        }
      })
      localStorage.setItem('data', JSON.stringify(arr))
      render()
    }
  })
  $('#missions').on('click', '.missionName', function () {
    $(this).css('backgroundColor', 'rgb(216, 212, 212)').parent().siblings().children(':first-child').css('backgroundColor', 'rgb(241, 236, 236)')
    targetWindowView.center = [parseFloat($(this).attr('lon')), parseFloat($(this).attr('lat'))]
    targetWindowView.zoom = parseInt($(this).attr('zoom'))
    referenceWindowView.center = [parseFloat($(this).attr('lon')), parseFloat($(this).attr('lat'))]
    referenceWindowView.zoom = parseInt($(this).attr('zoom'))
  })
  $('#compare').on('click', function () {
    if ($('#Missions').attr('Status') === '1') {
      console.log(1)
      if (parseInt($(this).attr('status')) == '1') {
        $('#years').css('display', 'block')
        $('#years_right').css('display', 'block')
        $('#referenceWindow').attr('id', 'referenceWindow1')
        $('#targetWindow').attr('id', 'targetWindow1')
        $('#main').css({ 'margin-right': '310px', 'margin-left': '140px' })
        $(this).attr('status', '2')
      } else {
        $('#years').css('display', 'none')
        $('#years_right').css('display', 'none')
        $('#referenceWindow1').attr('id', 'referenceWindow')
        $('#targetWindow1').attr('id', 'targetWindow')
        $('#main').css({ 'margin-right': '170px', 'margin-left': '0' })
        $(this).attr('status', '1')
      }
    } else if ($('#Missions').attr('Status') === '2') {
      console.log(2)
      if (parseInt($(this).attr('status')) == '1') {
        $('#years').css('display', 'block')
        $('#years_right').css('display', 'block')
        $('#referenceWindow').attr('id', 'referenceWindow1')
        $('#targetWindow').attr('id', 'targetWindow1')
        $('#main').css({ 'margin-right': '140px', 'margin-left': '140px' })
        $(this).attr('status', '2')
      } else {
        $('#years').css('display', 'none')
        $('#years_right').css('display', 'none')
        $('#referenceWindow1').attr('id', 'referenceWindow')
        $('#targetWindow1').attr('id', 'targetWindow')
        $('#main').css({ 'margin-right': '0', 'margin-left': '0' })
        $(this).attr('status', '1')
      }
    }
  })
  $('#Missions').on('click', function () {
    if (parseInt($(this).attr('Status')) == '1') {
      if ($('#compare').attr('status') == '1') {
        $('#function').css('display', 'none')
        $('#main').css('margin-right', '0px')
        $(this).attr('Status', '2')
      } else {
        $('#function').css('display', 'none')
        $('#main').css('margin-right', '146px')
        $(this).attr('Status', '2')
      }
    } else if (parseInt($(this).attr('Status')) == '2') {
      if ($('#compare').attr('status') == '1') {
        $('#function').css('display', 'block')
        $('#main').css('margin-right', '170px')
        $(this).attr('Status', '1')
      } else {
        $('#function').css('display', 'block')
        $('#main').css('margin-right', '316px')
        $(this).attr('Status', '1')
      }
    }
  })
  $('.nav').hover(
    function () { $(this).children('div').css('display', 'block') },
    function () { $(this).children('div').css('display', 'none') }
  )
  var dom = document.getElementById('myChart');
  var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  var app = {};

  var option;

  let base = +new Date(1968, 9, 3);
  let date = [];
  let data = [30];
  for (let i = 1; i < 10; i++) {
    date.push(2013 + i);
    if (i <= 8) {
      data.push(Math.round((Math.random() - 0.5) * 4 + data[i - 1]));
    } else if (i == 9) {
      data.push(10)
    }
  }
  option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: '湖泊水位变化'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {
        name: '水位高度',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data.slice(1, 10)
      }
    ]
  };

  $('#AI_content').css('display', 'none')

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  window.addEventListener('resize', myChart.resize);
  $('#close').on('click', function () {
    $('#AI_content').animate({
      opacity: 0
    }, 100, 'swing', function () {
      $(this).css('display', 'none')
    })
    $('#myChart').css('display', 'none')
    $('#recognize').css('display', 'none')
    $(this).attr('status', '1')
  })
  $('#Mission_landform').on('click', function () {
    $('#AI_content').css('display', 'block')
    $('#AI_content').animate({
      opacity: 1
    }, 100, 'swing', function () {
    })
    $('#myChart').css('display', 'block')
    $('#recognize').css('display', 'none')
    $(this).attr('status', '2')
    $('#5').click()
  })
  $('#Mission_identify').on('click', function () {
    $('#AI_content').css('display', 'block')
    $('#AI_content').animate({
      opacity: 1
    }, 100, 'swing', function () {
    })
    $('#recognize').css('display', 'block')
    $('#myChart').css('display', 'none')
    $(this).attr('status', '2')
    $('#3').click()
  })
});