import { useEffect } from "react";

import { relations } from "../data/relations";

export default function Graph() {
  useEffect(() => {
    console.log("Graph mounted OK");
    console.log("relations:", relations);
  }, []);

  return <div style={{ padding: 20 }}>GRAPH OK</div>;
}
