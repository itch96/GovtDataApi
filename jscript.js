var main = function() {
	var i = 0;
	// store your personal api key in this variable
	var key = ''; // i think i am not supposed to share this key.
	// store the pincode that you want to search for in the database
	var pincode = '504273';
	// list the feilds that you want to see regarding that pincode
	// all possible fields are: 
	/*	"id": "1",
        timestamp,
        officename,
        pincode,
        officeType,
        Deliverystatus.
        divisionname,
        regionname,
        circlename,
        Taluk,
        Districtname,
        statename,
        Telephone,
        Related Suboffice,
        Related Headoffice,
        longitude,
        latitude
    */
    // here for the sake of an example, I am only showing these three fields
	var fields = ['officename', 'divisionname', 'circlename'];
	// it is always a good practice to keep your data sorted.
	// sort[0] for ascending and sort[1] for descending.
	var sort = '&sort[pincode]=asc';
	// finally all your entered queries/above 4 variables are merged in the api.
	var api = 'https://data.gov.in/api/datastore/resource.json?resource_id=04cbe4b1-2f2b-4c39-a1d5-1c2e28bc0e32&api-key='+key+'&filters[pincode]='+pincode+'&fields=';
	// addig all the fields from the fields array.
	while(i < fields.length){
		if(i == fields.length - 1){
			api += fields[i] + '';
		}
		else{
			api += fields[i] + ','
		}
		i ++;
	}
	// if you want to sort the info as well 
	api += sort;
	// sending the json request and accessing the callback via the data variable
	$.getJSON(api, function(data){
		i = 0;
		while(i < data.records.length){
			// in html, there is a <p> with class of 'info'.
			// printing out all the fields and field values.
			$('.info').append("Office Name: " + (data.records[i].officename) + ", ");
			$('.info').append("Division Name: " + data.records[i].divisionname + ", ");
			$('.info').append("Circle Name: " + data.records[i].circlename + ".");
			$('.info').append("<br/><br/>");
			i ++;
		}
	});
};

$(document).ready(main);
