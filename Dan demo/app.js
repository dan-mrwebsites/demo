var app;

(function() {
    
	window.APP = {
		dataSources : {
			dsDistricts: new kendo.data.DataSource({
				offlineStorage: "dsDistricts_offline",
				transport: { 
					read: {
						type: "GET",
						url: "http://riggertalk.com/ajax/get_districts.php?type=services",
						dataType: "json",
						timeout: 10000
					}
				},
				error: function(e) {
					console.log(e);
				},
				schema: { // enables the use of method get(DistrictID) to return data for a single district
					model: { id: "DistrictID" }
				}
			})
		}
	};
    
	document.addEventListener('deviceready', function() {
		if (navigator && navigator.splashscreen) {
			navigator.splashscreen.hide();
		}

		app = new kendo.mobile.Application(document.body, {
			transition: 'slide',
			initial: 'views/viewFirst.html'
		});
		
		//console.log(app);
	}, false);
}());