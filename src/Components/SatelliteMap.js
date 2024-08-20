import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as satellite from 'satellite.js';
import icon from "../Components/Images/pngegg.png"

function SatelliteMap({ line1, line2 }) {
  const mapRef = useRef(null);
  const [position, setPosition] = useState(null);

  const customIcon = L.icon({
   iconUrl:icon,
   iconSize:[30,40],
  });

  const updateSatellitePosition = () => {
    try {
      const satrec = satellite.twoline2satrec(line1, line2);
      const now = new Date();
      const positionAndVelocity = satellite.propagate(satrec, now);
      const positionEci = positionAndVelocity.position;

      if (!positionEci) {
        throw new Error('Position data is undefined.');
      }

      const gmst = satellite.gstime(now);
      const positionGd = satellite.eciToGeodetic(positionEci, gmst);

      const latitude = satellite.degreesLat(positionGd.latitude);
      const longitude = satellite.degreesLong(positionGd.longitude);

      if (isNaN(latitude) || isNaN(longitude)) {
        throw new Error('Calculated latitude or longitude is NaN.');
      }

      return { latitude, longitude };
    } catch (error) {
      console.error('Error calculating satellite position:', error);
      return null;
    }
  };

  useEffect(() => {
    if (!mapRef.current) {
      const initialPosition = updateSatellitePosition();

      if (initialPosition) {
        // Initialize the map
        const leafletMap = L.map('map').setView([initialPosition.latitude, initialPosition.longitude], 2);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(leafletMap);

        

        const marker = L.marker([initialPosition.latitude, initialPosition.longitude], { icon: customIcon })
          .addTo(leafletMap)
          .bindPopup(`Satellite Position: ${initialPosition.latitude.toFixed(2)}, ${initialPosition.longitude.toFixed(2)}`)
          .openPopup();

        mapRef.current = {
          map: leafletMap,
          marker,
        };
      }
    }
  }, [line1, line2]);

  useEffect(() => {
    if (mapRef.current && position) {
      const { map, marker } = mapRef.current;

      marker.setLatLng([position.latitude, position.longitude],{icon:customIcon})
        .setPopupContent(`Satellite Position: ${position.latitude.toFixed(2)}, ${position.longitude.toFixed(2)}`)
        .openPopup();

      map.setView([position.latitude, position.longitude], map.getZoom()); // Optional: Center the map on the new position
    }
  }, [position]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = updateSatellitePosition();
      if (newPosition) {
        setPosition(newPosition);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [line1, line2]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default SatelliteMap;
