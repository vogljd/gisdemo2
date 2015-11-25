(function () {
	'use strict';

	angular
	.module("myMap")
	.controller("mapController", mapController);
	
	mapController.$inject = ['$scope', '$http', '$cookies', '$location', 'mapservice', 'settings'];
	
	function mapController($scope, $http, $cookies, $location, mapservice, settings) {
		var vm = this;
		vm.settings = settings;
		vm.map = {
			basemap : "streets",
			center : [-105.539, 40.609],
			zoom : 10,
			lng : 0,
			lat : 0,
			logo : false,
			isKeyboardNavigation : true,
			showAttribution : false,
			sliderPosition : "top-left",
			sliderStyle : "large",
			maplayers : []
			};

		// public methods
		vm.path = $location.path();
		activate();

		function activate() {
			//			mapservice.initCookies(vm.userSettingsList);
			mapservice.createMap("map", vm.map, function (e) {
				// onload
				addMapFeatures();
				$(".preload").fadeOut("slow");
			});
		}

		function addMapFeatures() {
			$scope.$apply(function () {
				//Widgets
				mapservice.on("click", function (e) {
					console.log(e);
					click(e);
				});
				mapservice.initMapSearch("search");
				refreshMapInfo();
			});
		}

		function refreshMapInfo() {
			mapservice.refreshMapData(vm.map);
		}

		var panOrZoom = function () {
			$scope.$apply(function () {
				refreshMapInfo();
			});
		};

		var click = function (evt) {
			$scope.$apply(function () {
				console.log(evt);
				refreshMapInfo();
			});
		};


	}
})();
