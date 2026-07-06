import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Background from "../layers/Background";
import Territories from "./Territories";
import Authors from "./Authors";

export default function Graph() {
  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={3}
      centerOnInit
    >
      <TransformComponent>
        <svg
          width="950"
          height="620"
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <Background />

          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="2"
                stdDeviation="2"
                floodOpacity="0.15"
              />
            </filter>
          </defs>

          <Territories />

          <Authors />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}
