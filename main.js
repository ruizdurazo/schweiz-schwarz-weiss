/* 
 * Enrique Ruiz Durazo
 * 2019
 */

// Vars
// var hoverId = null
// var hoverId_2 = null
// var clickId = null
// var clickId_2 = null
// var zoomThMuni = 6
// var zoomThManz = 11

// Map    
mapboxgl.accessToken =
    'pk.eyJ1IjoicnVpemR1cmF6byIsImEiOiJjanFvcXNkMmowNnB6NDlxcDBwaGQ4ZjEzIn0.H-lM1PHESSmLxzfeJowlOg'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ruizdurazo/cjxtox2zd3sx91cnyrhv79844',
    center: [8.23, 46.82],
    zoom: 8,
    minZoom: 7.5,
    maxZoom: 15.5,
    maxBounds: [
        [5.4, 45.6],
        [11.1, 48]
    ],
    hash: false,
    logoPosition: 'bottom-left',
    attributionControl: false
})

// Controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right')

var geoControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
})

map.addControl(geoControl, 'top-right')

map.addControl(new mapboxgl.AttributionControl({
    compact: false,
    customAttribution: '<a href="https://github.com/ruizdurazo/schweiz-schwarz-weiss" target="_blank">© Enrique Ruiz Durazo</a>'
}))
