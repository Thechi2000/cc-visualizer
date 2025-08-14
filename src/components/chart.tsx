"use client";

import mermaid from "mermaid";
import { useEffect } from "react";

export function MermaidChart({ chart }: { chart: string }) {
  useEffect(() => {
    // Find the container and remove Mermaid's marker attribute
    const element = document.getElementById("mermaid-container");
    element?.removeAttribute("data-processed"); // Re-run Mermaid to re-render the chart
    mermaid.contentLoaded();
  }, [chart]); // run effect whenever chartDefinition changes  // Render the chart code in a container
  return (
    <div id="mermaid-container" className="mermaid">
      {chart}
    </div>
  );
}
