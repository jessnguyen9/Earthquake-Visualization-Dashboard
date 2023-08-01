// Creating map object
function createMap() {
    let myLeafMap = L.map("map",{
        center: [40, -100],
        zoom: 4
    });
    
    // Add the tile layer (OpenStreetMap) to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myLeafMap);
    
    return myLeafMap;
}

// Function to create circle markers
function createMarkers(data) {
    let markers = L.layerGroup();

    data.forEach(item => {
        let latitude = item.latitude;
        let longitude = item.longitude;
        let magnitude = item.magnitude;
        let depth = item.depth;
        let title = item.title;

        let marker = L.circleMarker([latitude,longitude], {
            radius: magnitude * 4,
            fillColor: getColor(depth),
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.7
        }).bindPopup(`<h3>${title}</h3><h4>Magnitude: ${magnitude}</h4><h4>Depth: ${depth}</h4>`);
    
        markers.addLayer(marker);
    });

    return markers;
}

// Function to assign a color based on depth
function getColor(depth) {
    return depth > 300 ? '#800026' :
    depth > 100 ? '#BD0026' :
    depth > 70 ? '#E31A1C' :
    depth > 50 ? '#FC4E2A' :
    depth > 30 ? '#FD8D3C' :
    depth > 10 ? '#FEB24C' :
                 '#FED976';
}

// Create a legend for the map
function createLegend (myLeafMap, depths) {
    let legend = L.control({position: "bottomright"});

    legend.onAdd = function (map) {
        let div = L.DomUtil.create("div","legend");
        let labels = ["<strong>Earthquake Depth</strong>"];

        for (let i = 0; i < depths.length; i++) {
            let range = depths[i] + (depths [i+1] ? "&ndash;" + depths[i + 1] : "+");
            let color = getColor(depths[i] +1);

            div.innerHTML += `
            <div class="legend-row">
                <i style="background:${color}"></i>
                <div>${range}</div>
            </div>
      `     ;
        }
        div.innerHTML = labels.join("<br>") + div.innerHTML;
        return div;
    };

    legend.addTo(myLeafMap);
}

// Simulated data for earthquakes
let earthquakeData = [
    { latitude: 34, longitude: -118, magnitude: 5.5, depth: 20, title: 'Earthquake 1' },
    { latitude: 38, longitude: -95, magnitude: 4.2, depth: 10, title: 'Earthquake 2' },
    { latitude: 41, longitude: -112, magnitude: 6.8, depth: 80, title: 'Earthquake 3' },
    // Add more data as needed
];
  
  // Log the data and add it to the map
document.addEventListener('DOMContentLoaded', () => {
    let myLeafMap = createMap();
    let markers = createMarkers(earthquakeData);
    let depths = [0, 10, 20, 30, 40];
  
    myLeafMap.addLayer(markers);
    createLegend(myLeafMap, depths);
});

// Define the URL for the earthquake data
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Fetch the data
d3.json(url).then(function(response) {
    console.log(response);
    features = response.features;

    createFeatures(features);
});