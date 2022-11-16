import { useCallback, useState } from "react";
import MapGL, { Layer, LayerProps, Marker } from "react-map-gl";

import DrawControl from "./map/components/drawBoxControl";

const parkLayer: LayerProps = {
  id: "landuse_park",
  type: "fill",
  source: "mapbox",
  "source-layer": "landuse",
  filter: ["==", "class", "park"],
  paint: {
    "fill-color": "#4E3FC8",
  },
};

const token =
  "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g";

// const MODES = [
//   { id: "drawPolyline", text: "Draw Polyline", handler: DrawLineStringMode },
//   { id: "drawPolygon", text: "Draw Polygon", handler: DrawPolygonMode },
//   { id: "editing", text: "Edit Feature", handler: EditingMode },
// ];

const DEFAULT_VIEWPORT = {
  width: 800,
  height: 600,
  longitude: -122.45,
  latitude: 37.78,
  zoom: 14,
};

export default function MapComponent() {
  const [features, setFeatures] = useState({});

  const onUpdate = useCallback((e: unknown) => {
    console.log(e);
    // setFeatures((currFeatures) => {
    //   const newFeatures = { ...currFeatures };
    //   for (const f of e.features) {
    //     newFeatures[f.id] = f;
    //   }
    //   return newFeatures;
    // });
  }, []);

  const onDelete = useCallback((e: unknown) => {
    console.log(e);
    // setFeatures((currFeatures) => {
    //   const newFeatures = { ...currFeatures };
    //   for (const f of e.features) {
    //     delete newFeatures[f.id];
    //   }
    //   return newFeatures;
    // });
  }, []);
  return (
    <div
      style={{
        height: "300px",
        marginBottom: "10%",
        overflow: "hidden",
      }}
    >
      <MapGL
        cursor="pointer"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 10,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={token}
      >
        {/* Marker issue gone */}
        <Marker longitude={-100} latitude={40} anchor="bottom">
          <p style={{ color: "red", fontSize: 20 }}>Hello world</p>
        </Marker>
        <DrawControl
          position="top-left"
          displayControlsDefault={true}
          //   controls={{
          //     polygon: true,
          //     trash: true,
          //     combine_features: true,
          //     line_string: true,
          //   }}
          //   defaultMode="draw_polygon"
          //   onCreate={onUpdate}
        />
        <Layer {...parkLayer} />
      </MapGL>
    </div>
  );
}
