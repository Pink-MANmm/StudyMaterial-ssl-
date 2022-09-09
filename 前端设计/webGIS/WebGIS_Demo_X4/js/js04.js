require([
      "esri/Map",
      "esri/views/MapView"
    ], function(Map, MapView) {
//**********************************************功能：swip map**********************************************************
      var map01 = new Map({
        basemap: "streets"
      });
      
      var view = new MapView({
        container: "viewDiv01",
        map: map01,
        center: [-118.71511,34.09042],
        zoom: 11
      });
      
      var map02 = new Map({
        basemap: "gray"
      });
      
      var view = new MapView({
        container: "viewDiv02",
        map: map02,
        center: [-118.71511,34.09042],
        zoom: 11
      });
      
  });
  
function SwipeMap()
{
    console.log(event.clientX);
    //鼠标屏幕x坐标等于上层地图宽度
    document.getElementById("viewDiv02").style.clip="rect(0px,"+event.clientX +"px,768px,0px)";

}
    
