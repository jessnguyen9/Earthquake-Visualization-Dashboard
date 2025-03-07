# Earthquake Visualization Dashboard

## Overview
This project aims to help users understand and explore earthquake data collected by the United States Geological Survey (USGS) using an interactive map. The visualization shows earthquake information such as the magnitude, depth, and location of each event. By using this tool, users can gain insights into recent earthquakes around the world and understand patterns based on geographic location and magnitude.

## How It Works
I focused on transforming raw earthquake data from the USGS into a visually engaging, easy-to-understand format. The data comes from the USGS GeoJSON Feed, which provides real-time earthquake information in a structured format.

## Key Features
**Interactive Map:** Users can zoom in and out to explore earthquake locations globally.

**Markers:** Each earthquake is represented by a colored marker, where the size indicates the magnitude and the color represents the depth of the earthquake.

**Popups:** Clicking on a marker reveals detailed information about the earthquake, including its location, magnitude, depth, and the time it occurred.

**Legend:** A legend explains the color scale based on earthquake depth, helping users interpret the data visually.

## How To Use
1. Visit the interactive map and zoom in or out to explore different regions.
2. Click on any earthquake marker to see detailed information, such as its magnitude, depth, and time.
3. Use the legend to understand the color coding and its relation to earthquake depth.

## Tools & Techniques Used
**Leaflet (JavaScript Library):** Utilized for rendering the interactive map and plotting earthquake markers. Leaflet provides smooth, user-friendly interactions, allowing users to zoom and click on map markers for detailed information.

**D3.js (JavaScript Library):** Employed for fetching and processing the earthquake data from the USGS GeoJSON feed. D3.js dynamically updates the map with real-time data and visualizes key attributes, such as magnitude and depth, in a clear format.

**GeoJSON:** The USGS earthquake data is retrieved in GeoJSON format, which is compatible with Leaflet and D3.js for efficient visualization. This format includes detailed geographic and seismic data, such as location coordinates, magnitude, depth, and event time.

**JavaScript:** Integrated for the overall functionality of the dashboard, including fetching the data, handling user interactions, and updating the map with accurate, real-time earthquake information.

![Image 7-31-23 at 6 04 PM](https://github.com/jessnguyen9/leaflet-challenge/assets/128268114/6ce83b2b-f43d-45c4-bdea-a3cef3f820c6)

## Conclusion
This Earthquake Visualization Dashboard offers an intuitive way to explore real-time earthquake data and understand seismic activity patterns across the globe. By leveraging tools like Leaflet, D3.js, and GeoJSON, the dashboard effectively presents complex earthquake data in a visual, accessible format, enabling users to interact with and gain insights from the data.
