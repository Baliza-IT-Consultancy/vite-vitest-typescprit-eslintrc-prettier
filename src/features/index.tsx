// import { useCallback, useState } from "react";

import MapGL, { Layer, LayerProps, Marker, Source } from "react-map-gl";

import DrawControl from "./map/components/drawBoxControl";

const parkLayer: LayerProps = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "blue",
    "fill-opacity": 0.2,
  },
};

const token =
  "pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g";

// const MODES = [
//   { id: "drawPolyline", text: "Draw Polyline", handler: DrawLineStringMode },
//   { id: "drawPolygon", text: "Draw Polygon", handler: DrawPolygonMode },
//   { id: "editing", text: "Edit Feature", handler: EditingMode },
// ];

// const DEFAULT_VIEWPORT = {
//   width: 800,
//   height: 600,
//   longitude: -122.45,
//   latitude: 37.78,
//   zoom: 14,
// };

export default function MapComponent() {
  //   const [features, setFeatures] = useState({});

  //   const onUpdate = useCallback((e: unknown) => {
  //     console.log(e);
  //     // setFeatures((currFeatures) => {
  //     //   const newFeatures = { ...currFeatures };
  //     //   for (const f of e.features) {
  //     //     newFeatures[f.id] = f;
  //     //   }
  //     //   return newFeatures;
  //     // });
  //   }, []);

  //   const onDelete = useCallback((e: unknown) => {
  //     console.log(e);
  //     // setFeatures((currFeatures) => {
  //     //   const newFeatures = { ...currFeatures };
  //     //   for (const f of e.features) {
  //     //     delete newFeatures[f.id];
  //     //   }
  //     //   return newFeatures;
  //     // });
  //   }, []);
  const onDrawCreate = ({ features }: any) => {
    console.log(features);
  };

  const onDrawUpdate = ({ features }: any) => {
    console.log(features);
  };
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
          controls={{
            polygon: true,
            trash: true,
            combine_features: false,
            line_string: false,
            uncombine_features: false,
          }}
          onCreate={onDrawCreate}
          onUpdate={onDrawUpdate}
        />
        <Source
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "MultiPolygon",
                  coordinates: [
                    [
                      [
                        [-100.10231018066392, 40.06860861962642],
                        [-100.10711669921885, 40.00499682642237],
                        [-99.98283386230456, 39.998684984898176],
                        [-99.97665405273449, 40.07386313779287],
                        [-100.10231018066392, 40.06860861962642],
                      ],
                    ],
                  ],
                },
              },
            ],
          }}
        >
          <Layer {...parkLayer} />
        </Source>
      </MapGL>
    </div>
  );
}
