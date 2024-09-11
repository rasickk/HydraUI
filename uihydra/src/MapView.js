import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFzaWNrayIsImEiOiJjbTBwcWpnMXgwM3FxMnZxMnpiNGFoemoyIn0.Q77PtnkmEHBSV9d0lbrC2Q'

const MapView = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11', // Use a style that supports terrain
      center: [-75.75,39.66],
      zoom: 15, // Zoom level to get a closer view of 3D features
      pitch: 60, // Tilt the map to get a 3D perspective
      bearing: -17.6 // Optional: Adjust the rotation to better view 3D terrain
    });

    // Enable 3D terrain
    map.on('load', () => {
      map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      });

      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

      // Add 3D buildings layer
      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    });

    return () => map.remove();
  }, []);

  

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default MapView;
