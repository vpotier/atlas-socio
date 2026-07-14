import { useState, useEffect } from "react";

// Détecte si l'écran est en-dessous du seuil "mobile" (768px par défaut),
// avec mise à jour automatique au redimensionnement.
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
      window.innerWidth < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
