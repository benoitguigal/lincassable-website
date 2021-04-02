import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ";

const Map = (props) => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(5.382053);
  const [lat, setLat] = useState(43.301906);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
    //map.on("load", () => map.resize());
    return () => map.remove();
  }, []);

  return (
    <div {...props}>
      <div class="map-container z-10 h-full" ref={mapContainer} />
    </div>
  );
};

export default Map;
