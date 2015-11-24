(function () {

	angular
	.module("map.core")
	.factory("mapservice", mapservice);

	function mapservice() {
		// scope vars
		var map;

		var service = {
			createMap : createMap,
			refreshMapData : refreshMapData,
			setCoordinatesToCurrent : setCoordinatesToCurrent,
			initMapSearch : initMapSearch,
			on : on
		};

		return service;
		activate();

		function activate() {
			$scope.$on("$destroy", destroy);
		}

		function createMap(mapDOM, mapModel, onLoad) {
			require(["esri/map",
					"dojo/domReady!"
				],
				function (Map) {
				map = new Map(mapDOM, {
						basemap : mapModel.basemap,
						center : mapModel.center,
						zoom : mapModel.zoom,
						logo : mapModel.logo,
						isKeyboardNavigation : mapModel.isKeyboardNavigation,
						//						isPanArrows : true,
						showAttribution : mapModel.showAttribution,
						sliderPosition : mapModel.sliderPosition,
						sliderStyle : mapModel.sliderStyle
					})
					on("load", onLoad);
			});
		}
		
		function on(event, callBack) {
			map.on(event, callBack);
		}
		
		function initMapSearch(searchDOM) {
			require(["esri/dijit/Search",
					"dojo/domReady!"
				],
				function (Search) {
				var s = new Search({
						map : map
					}, searchDOM);
				s.startup();
			});
		}

		function setCoordinatesToCurrent() {
			$cookies.put("userSettings.X-Coordinate") = mapModel.lng;
			$cookies.put("userSettings.Y-Coordinate") = mapModel.lat;
			$cookies.put("userSettings.Zoom-Level") = mapModel.scale;
		}

		function refreshMapData(mapModel) {
			mapModel.zoom = map.getZoom();
			var geoCenter = map.geographicExtent.getCenter();
			mapModel.lng = geoCenter.x;
			mapModel.lat = geoCenter.y;
			mapModel.scale = map.getScale();
			mapModel.basemap = map.getBasemap();
			mapModel.maplayers = map.getLayersVisibleAtScale(mapModel.scale);
			//			window.history.pushState("page", "page title", "index.htm?xCenter="+mapModel.lng+"&yCenter="+mapModel.lng+"&Scale="+mapModel.scale);
			parent.location.hash = "xCenter=" + mapModel.lng + "&yCenter=" + mapModel.lng + "&Scale=" + mapModel.scale;
			//			console.log("layer opacity: "+vm.layerOpacity[0]);
		}

		function destroy() {
			map.destroy();
		}

	}

}
	());
