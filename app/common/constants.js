(function () {
	var app = angular.module("map.core");
		app.constant('settings', 
			{"test":
				["test", "the sentence"]
			},
			{"drawingShapes":
			["Point", "Multi Point", "Line", "Polyline", "Freehand Polyline", "Triangle", "Rectangle", "Circle", "Ellipse", "Polygon", "Freehand Polygon"]
			}
		); 

	}
());	