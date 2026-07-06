import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import Background from "../layers/Background";
import Territories from "./Territories";
import Authors from "./Authors";
import Toolbar from "./Toolbar";

export default function Graph({
  selectedAuthor,
  setSelectedAuthor,
}) {
  return (
    <>
      <Toolbar />

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        centerOnInit
      >
        <TransformComponent>
          <svg
            width="1100"
            height="700"
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

            <Authors
              selectedAuthor={selectedAuthor}
              setSelectedAuthor={setSelectedAuthor}
            />
          </svg>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}
