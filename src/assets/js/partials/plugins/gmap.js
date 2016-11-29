
/*$('#gmap').on('inview', function(event, isInView) {
    if (isInView) {
        drop();
    } else {
        alert("out from gmap");
    }
});*/

/* ------------------------------------------- */

var neighborhoods = [
  {lat: 53.911619, lng: 27.579647},
  {lat: 53.911619, lng: 27.576343}
];

var markers = [], marker;
var map;
var image = './assets/img/map/marker.png';

$('#gmap').one('inview', drop());

/* ----------------------------------------------------------- */



/* ----------------------------------------------------------- */

function drop() {
    clearMarkers();
    /*for (var i = 0; i < neighborhoods.length; i++) {
        addMarker(neighborhoods[i], i * 200);
    }*/
    addMarker({lat: 53.911619, lng: 27.579647}, 1500);
}

function addMarker(position, timeout) {
    window.setTimeout(function () {
        marker = new google.maps.Marker({
            map: map,
            position: position,
            /*draggable: true,*/
            animation: google.maps.Animation.DROP,
            icon: image
        });
        /*marker.addListener('click', toggleBounce);*/

        if (getPageSize()[2] < 768) {
            map.setCenter( marker.getPosition() );
        }
    }, timeout);
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}
