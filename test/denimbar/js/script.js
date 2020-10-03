// JavaScript Document

$(function () {
		
		//地図（Map）//
		var canvas = document.getElementById( 'd_map' ) ;		
		var latlng = new google.maps.LatLng( 34.599003, 133.769559 );
		var mapOptions = {
			zoom: 16,
			center: latlng,
			
			//色//
			styles: [{
				stylers: [
			 		{	hue: "#000d4e" },//色//
					{	saturation: 100 },//彩度65//
					{	gamma: 0.5 },//ガンマ1//
					{	saturation: -80 }
				]
			}]
		};
		var map = new google.maps.Map( canvas , mapOptions ) ;
		
		//マーカー（Marker）//
		var markers = [];
		markers[0] = new google.maps.Marker( {
			map: map,
			position: latlng,
			icon: 'image/iconMap_d2.png',
		});

});

