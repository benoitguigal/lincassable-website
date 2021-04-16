import React, { useRef, useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
import Marker from "./marker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ";

const Map = (props) => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  const data = useStaticQuery(graphql`
    query {
      allPlacesJson {
        edges {
          node {
            name
            latitude
            longitude
          }
        }
      }
    }
  `);
  const places = data?.allPlacesJson?.edges?.map((edge) => edge.node);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [5.382053, 43.301906],
      zoom: 9
    });
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    map.on("load", () => map.resize());
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <div {...props}>
      <div class="h-full" ref={mapContainer}>
        {places && map && (
          <>
            {places &&
              places.map((place) => (
                <Marker key={place.name} map={map} place={place} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
