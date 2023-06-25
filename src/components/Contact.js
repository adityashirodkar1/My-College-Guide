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
    <>
      <div>
        <div ref={mapContainer} className="map-container" style={{width: '100%', height: '250px'}} />
      </div>
      <div className='d-flex flex-column' style={{height: '500px'}}>
        <h2 className="text-center mt-4">Contact Us</h2>

        <div className='mt-5'>
          <div className="row">
            <div className="col">
              <h5 className='text-center'>Sakata Gintoki</h5>
              <h6 className='text-center text-muted'><i class="bi bi-telephone"></i> +91 878292290</h6>
            </div>
            <div className="col">
              <h5 className='text-center'>Ayanoukoji Kiyotaka</h5>
              <h6 className='text-center text-muted'><i class="bi bi-telephone"></i> +91 9372282211</h6>
            </div>
            <div className="col">
              <h5 className='text-center'>Gojo Satoru</h5>
              <h6 className='text-center text-muted'><i class="bi bi-telephone"></i> +91 7561912290</h6>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <div className="row">
            <div className="col">
              <h6 className='text-center text-muted'><i class="bi bi-envelope-at"></i> hahaXDRipBOZO@spit.ac.in</h6>
            </div>
          </div>
        </div>

        <div className="mt-5 border border-1 rounded-2" style={{width: '550px', margin: 'auto'}}>
          <div className='text-center'>
            <i class="bi bi-geo-alt-fill" style={{fontSize: '30px', color: 'blue'}}></i>
          </div>
          <div className="row mt-2">
            <div className="col">
              <p className='text-center'><b>Sardar Patel Institute of Technology</b><br />Bhavans Campus, Old D N Nagar, Munshi Nagar, Andheri West, <br />Mumbai, Maharashtra 400058</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// 19.12339045436202, 72.8361797672783