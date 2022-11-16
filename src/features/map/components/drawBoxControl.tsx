import MapboxDraw from "@mapbox/mapbox-gl-draw";
import type { ControlPosition, MapRef } from "react-map-gl";
import { useControl } from "react-map-gl";

type IDrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & {
  position?: ControlPosition;

  onCreate: (evt: { features: object[] }) => void;
  onUpdate: (evt: { features: object[]; action: string }) => void;
  onDelete: (evt: { features: object[] }) => void;
};

export default function DrawControl(props: IDrawControlProps) {
  useControl<MapboxDraw>(
    () => new MapboxDraw(props),
    ({ map }: { map: MapRef }) => {
      map.on("draw.create", props.onCreate);
      map.on("draw.update", props.onUpdate);
      map.on("draw.delete", props.onDelete);
    },
    ({ map }: { map: MapRef }) => {
      map.off("draw.create", props.onCreate);
      map.off("draw.update", props.onUpdate);
      map.off("draw.delete", props.onDelete);
    },
    {
      position: props.position,
    }
  );

  return null;
}

DrawControl.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCreate: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onUpdate: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onDelete: () => {},
};
