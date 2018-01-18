DistanceCalculator = function() {};

/*
 Args:
        latitude1: The latitude coordinates of origin(53.339428).
        longitude1: The longitude coordinates of origin(-6.257664).
        latitude2: The latitude coordinates or destination.
        longitude2: The longitude coordinates of destination.
        unit: (of distance) to be calculated. Currently supports Kms and Miles
*/

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	return dist
}

/*
 Args:
        prop: The property which will be used for sorting.
*/

function sortByKey(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }   
}

/*
 Args:
        file: The path of file to be used as data.
        callback: function to be called back

 Usage:
        Generic function to import file and check the success/failure to download file.

*/

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

/*
This will read the data from json file and call distance() function to calculate the distance and append users who fit the criteria of being in less than 100Km radius 

*/

readTextFile("data/customers.json", function(text){
    var data = JSON.parse(text);

	data.sort(sortByKey("user_id"));

	var table = document.getElementById("myTable");

    for (var key in data) {
  		if (data.hasOwnProperty(key)) {
    	var val = data[key];
    
    	var dist = distance(53.339428, -6.257664, val.latitude, val.longitude, 'K');
    
    	if(dist <= 100){
    		var row = table.insertRow(0);
    		var cell1 = row.insertCell(0);
    		var cell2 = row.insertCell(1);
    		var cell3 = row.insertCell(2);
    		var cell4 = row.insertCell(3);
    		cell1.innerHTML = val.name;
    		cell2.innerHTML = Math.round(val.latitude * 10000) / 10000 ;
    		cell3.innerHTML = Math.round(val.longitude * 10000) / 10000;
    		cell4.innerHTML = Math.round(dist * 100) / 100;
    		console.log(val);
    		}
  		}
	}

});
