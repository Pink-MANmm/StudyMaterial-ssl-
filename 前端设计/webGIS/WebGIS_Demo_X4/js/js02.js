require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {

	var map = new Map({
		basemap: "topo-vector"
	});

	//*************************添加图层*************************************
	// Trailheads Point feature layer
	var featureLayer01 = new FeatureLayer;
	featureLayer01.url = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer";

	// Trailheads Line feature layer
	var featureLayer02 = new FeatureLayer({
		url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer"
	});

	// Trailheads Polygon feature layer
	var featureLayer03 = new FeatureLayer({
		url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer"
	});

	document.getElementById("AddPoint").addEventListener("click", function() {
		map.add(featureLayer01);
	});

	document.getElementById("AddLine").addEventListener("click", function() {
		map.add(featureLayer02);
	});

	document.getElementById("AddPolygon").addEventListener("click", function() {
		map.add(featureLayer03);
	});

	//*************************添加地图到视图*************************************
	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [-118.71511, 34.09042],
		zoom: 11
	});

	//*************************移除图层*************************************
	document.getElementById("RemovePoint").addEventListener("click", function() {
		view.map.remove(featureLayer01);
	});

	document.getElementById("RemoveLine").addEventListener("click", function() {
		view.map.remove(featureLayer02);
	});

	document.getElementById("RemovePolygon").addEventListener("click", function() {
		view.map.remove(featureLayer03);
	});

	//*************************计算图层数量*************************************
	view.map.allLayers.on("change", function(event) {
		var num = event.target.length - 2;
		document.getElementById("Layers").textContent = "Layers： " + num;
	});

});