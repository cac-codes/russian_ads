// mapbox key - not needed if using stamen instead of mapbox
// var mapboxAccessToken = "pk.eyJ1Ijoic3R1YXJ0bWFjayIsImEiOiJja2hlYWFiNXYwZGxqMnJudjVqdGZiY3VpIn0.4hD2d_CU4I-Fn54yapqHaQ";



var map = L.map('mapid').setView([37.8, -96], 4).setMaxBounds([[55.234131, -142.700240],
    [16.296385, -55.392384]]);

// create variable for geojson
var geojson;

// custom info variable
var info = L.control();

// stamen map
var stamenLayer = new L.StamenTileLayer("watercolor");
map.addLayer(stamenLayer);

// mapbox layer (replaced with stamen layer for now)
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
//     id: 'mapbox/light-v9',
//     attribution: 'Mapbox',
//     tileSize: 512,
//     zoomOffset: -1,
//     minZoom: 3,
//     maxZoom: 6
// }).addTo(map);

// Drawing state bounds using the co-ordinates in statesData object and adding them to the map
L.geoJson(statesData).addTo(map);

// get color for state layer style
function getColor(name) {
    return name.includes("a") ? '#b7e3fc' :
                                '#b7e3fc';
}

// state layer style
function style(feature) {
    return {
        fillColor: getColor(feature.properties.name),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// apply style function styles to states
L.geoJson(statesData, {style: style}).addTo(map);


// mouseover states function
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    // custom info box
    info.update(layer.feature.properties);
}

// mouseout of states function to reset layer style
function resetHighlight(e) {
    geojson.resetStyle(e.target);

    info.update();
}


geojson = L.geoJson(statesData);



// click listener to zoom on clicked state
function zoomToFeature(e) {
    if (map._zoom < 5) {
        map.fitBounds(e.target.getBounds());
    }
}

// function calling mouseover/mouseout/click listeners
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// add style and event listener functions to each state
geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


// custom info function
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>State Data</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

// add custom info box to map
info.addTo(map);
