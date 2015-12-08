function showDistrictDetail(e){
	var params = e.view.params;
	
	if(params.DistrictID==undefined){
		// no district is selected from the list
	}else{
		var district = APP.dataSources.dsDistricts.get(params.DistrictID);
	
		var template = kendo.template($("#DistrictTemplate").html());

		var districtHTML = template(district);

		$("#district-content").html(districtHTML);
	}
}