import React from 'react'
import { useRef, useEffect } from 'react';
// import Marker from './Marker';
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
    new mapboxgl.Marker({
      color: 'red'
    })
      .setLngLat([72.8361797672783, 19.12339045436202])
      .setPopup(new mapboxgl.Popup().setHTML("<h6>Sardar Patel Institute of Technology</h6><p>Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, Mumbai, Maharashtra 400058</p>"))
      .addTo(map.current);

      map.current.addControl(new mapboxgl.NavigationControl());

  });

  // useEffect(() => {
  //   new mapboxgl.Marker()
  //     .setLngLat([72.8361797672783, 19.12339045436202])
  //     .addTo(map.current);
  // })

  return (
    <div>
      <div ref={mapContainer} className="map-container" style={{width: '100%', height: '250px'}} />
    </div>
  )
}

// 19.12339045436202, 72.8361797672783