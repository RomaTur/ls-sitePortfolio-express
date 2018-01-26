// import ymaps from 'ymaps'
var GoogleMapsLoader = require('google-maps'); // only for common js environments 

module.exports = (mapSelector) => {
  //////////
  let el = document.querySelector('#' + mapSelector);
  if (el) {
    console.log('in mapInit')
    var NizNov = {
      lat: 56.314211,
      lng: 43.991296
    };
    var zoomVal = 15;

    var screenWidth = document.body.clientWidth;
    if (screenWidth <= 1024) zoomVal = 14;
    if (screenWidth <= 480) zoomVal = 13;



    GoogleMapsLoader.KEY = 'AIzaSyBESwPgs7bzboJ24WsUQpJC3zbaYxYbRn4';

    GoogleMapsLoader.load(function (google) {
      var map = new google.maps.Map(el, {
        zoom: zoomVal,
        center: NizNov,
        mapTypeControl: false,
        disableDefaultUI: true,
        // mapTypeId: 'satellite'
        styles: [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "color": "#444444"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "saturation": "100"
          }
      ]
  },
  {
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "saturation": "50"
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#00baaa"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "saturation": "99"
          },
          {
              "lightness": "-100"
          },
          {
              "color": "#ff0000"
          },
          {
              "visibility": "on"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text",
      "stylers": [
          {
              "saturation": "-100"
          },
          {
              "lightness": "2"
          },
          {
              "color": "#00ffd8"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "labels.text",
      "stylers": [
          {
              "color": "#259f99"
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#46ecbe"
          },
          {
              "saturation": "100"
          },
          {
              "lightness": "0"
          },
          {
              "gamma": "1.08"
          },
          {
              "weight": "4.86"
          }
      ]
  }
]
      });

    });

  }
};