function initMap() {
	// add your code here
	var ucsd_ltlng = {lat:32.878797, lng:-117.235918};

	var map = new google.maps.Map(document.getElementById('map'),{
		center: ucsd_ltlng,
		zoom: 19
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title:"UCSD"
	});
}