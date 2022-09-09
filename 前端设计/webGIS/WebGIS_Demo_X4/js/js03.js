var map01;
var map02;

require([
      "esri/Map",
      "esri/views/MapView"
    ], function(Map, MapView) {
//**********************************************功能：swip map**********************************************************
      var map01 = new Map({
        basemap: "streets"
      });
      
      var view01 = new MapView({
        container: "viewDiv01",
        map: map01,
        center: [-118.71511,34.09042],
        zoom: 11
      });
      
      var map02 = new Map({
        basemap: "hybrid"
      });
      
      var view02 = new MapView({
        container: "viewDiv02",
        map: map02,
        center: [-118.71511,34.09042],
        zoom: 11
      });
      
      
      view01.on(["pointer-down","pointer-move"], function(evt) {
        LinkMap02();
      });
      
      function LinkMap02() {
      	view02.zoom=view01.zoom;
      	view02.center=view01.center;
      }
      
      view02.on(["pointer-down","pointer-move"], function(evt) {
        LinkMap01();
      });
      
      function LinkMap01() {
      	view01.zoom=view02.zoom;
      	view01.center=view02.center;
      	
      }
      
      
      
      
      
  });
  

    
