var mapboxAccessToken = "pk.eyJ1Ijoic3R1YXJ0bWFjayIsImEiOiJja2hlYWFiNXYwZGxqMnJudjVqdGZiY3VpIn0.4hD2d_CU4I-Fn54yapqHaQ";
var map = L.map('mapid').setView([37.8, -96], 4);

var geojson;

// custom info variable
var info = L.control();

// stamen map
var stamenLayer = new L.StamenTileLayer("toner");
map.addLayer(stamenLayer);

// variables for data access


// for flip cards on main page
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});


const infoTesting = {
  "data": {
  "likes_of_friends": null,
  "interest_expansion": false,
  "language": null,
  "page_0": "https://hexagram.io/analysis/P0005254-0.png",
  "politics": null,
  "landing_page": "https://www.facebook.com/brownunitedfront/",
  "ad_creation_date": "2017-02-22T14:50:37Z",
  "home_composition": null,
  "cropped_image": "https://hexagram.io/analysis/crop/P0005254-1.png",
  "interests": [
  "Mexico",
  "Latin hip hop",
  "Chicano Movement",
  "Hispanidad",
  "Lowrider",
  "Chicano rap",
  "La Raza"
  ],
  "pdf": "input/2017-q1/2017-02/P(1)0005254.pdf",
  "ad_text": "Edward James Olmos in Zoot Suit",
  "generation": null,
  "multicultural_affinity_exclude": null,
  "multicultural_affinity": null,
  "impressions": 29136,
  "custom_audience": null,
  "job_title": null,
  "ad_id": "2719",
  "placements": [
  "News Feed on desktop computers",
  "News Feed on mobile devices"
  ],
  "behaviors": null,
  "location": "Texas",
  "interests_also_match": null,
  "location_living": [
  {
  "country": "United States"
  }
  ],
  "location_exclude": null,
  "school": null,
  "ad_custom_includes": null,
  "clicks": 4168,
  "ad_spend_currency": "RUB",
  "gender": null,
  "ad_spend": 400.0,
  "field_of_study": null,
  "target_age": "18 - 65+",
  "employer": null,
  "industry": null,
  "page_1": "https://hexagram.io/analysis/P0005254-1.png",
  "location_recent": null,
  "ad_end_date": "2017-02-23T14:50:37Z",
  "likes_exclude": null,
  "likes": null
  }
  }

// mapbox layer (replaced with stamen layer for now)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=' + mapboxAccessToken, {
    id: 'mapbox/light-v9',
    attribution: 'Mapbox',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 3,
    maxZoom: 6
}).addTo(map);

// Drawing state bounds using the co-ordinates in statesData object and adding them to the map
L.geoJson(statesData).addTo(map);


function getColor(name) {
    return name.includes("a") ? '#b7e3fc' :
                                '#b7e3fc';
}

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

L.geoJson(statesData, {style: style}).addTo(map);


// mouseover
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

    // custom info
    info.update(layer.feature.properties);
}

// mouseout
function resetHighlight(e) {
    geojson.resetStyle(e.target);

    info.update();
}


geojson = L.geoJson(statesData);



// click listener
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

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
    this._div.innerHTML = '<h4>US Population Density</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};

info.addTo(map);





var img =  infoTesting.data.cropped_image
var location_test = infoTesting.data.location
var adSpend = infoTesting.data.ad_spend
var impressions = infoTesting.data.impressions
var adInterestsAlsoMatch = infoTesting.data.interests_also_match