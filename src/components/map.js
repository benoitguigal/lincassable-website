import React, { useRef, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "../mapbox/style.json";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVub2l0Z3VpZ2FsIiwiYSI6ImNqdThob2Y5MDA5Zmg0NG4wMHg4Ynl0MHgifQ.CpODeh1akjBOEIXye5JXcQ";

const Map = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allBreweriesJson {
        edges {
          node {
            name
            lat
            long
          }
        }
      }
    }
  `);

  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style,
      center: [5.382053, 43.301906],
      zoom: 9
    });
    map.on("load", () => map.resize());

    data.allBreweriesJson.edges.forEach(({ node }) => {
      new mapboxgl.Marker().setLngLat([node.lat, node.long]).addTo(map);
    });

    return () => map.remove();
  }, [data]);

  return (
    <div {...props}>
      <div class="map-container z-10 h-full" ref={mapContainer} />
    </div>
  );
};

export default Map;
