import { useEffect } from "react";

export default function Graph(props) {
  useEffect(() => {
    console.log("GRAPH MOUNT OK", props);
  }, []);

  return (
    <div style={{ padding: 20, background: "red", color: "white" }}>
      GRAPH MOUNTED
    </div>
  );
}
