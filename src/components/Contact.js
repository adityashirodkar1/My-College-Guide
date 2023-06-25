import React from 'react'
import { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRpdHlhc2hpcm9ka2FyMSIsImEiOiJjbGo4dWQ1bngxYTV4M2pxeXNsNzBuczc1In0.HsjE3CveeyVRoWN6gevRCw';


export default function Contact() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [72.8361797672783, 19.12339045436202],
      zoom: 13
    });
  });

  return (
    <div>
      <h2>Contact is here</h2>
      <div ref={mapContainer} className="map-container" style={{width: '400px', height: '300px'}} />
    </div>
  )
}

// 19.12339045436202, 72.8361797672783