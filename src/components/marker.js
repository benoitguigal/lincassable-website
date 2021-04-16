// markers.js
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Marker = ({ map, place }) => {
  const markerRef = useRef();

  useEffect(() => {
    // create a DOM element for the marker
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat([place.latitude, place.longitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<h1>${place.name}</h1>`))
      .addTo(map);

    return () => marker.remove();
  });

  return <div ref={markerRef} />;
};

export default Marker;
