import { useState, useEffect } from "react";

// Détecte un écran "mobile" — même logique que les media queries CSS
// (voir app.css) : largeur OU hauteur réduite, pour bien traiter un
// téléphone en mode paysage (large mais bas) comme du mobile. Si cette
// logique diverge de celle du CSS, les deux se contredisent : React
// garde la barre latérale affichée pendant que le CSS repositionne les
// boutons flottants en supposant qu'elle a disparu — d'où des
// chevauchements.
const MOBILE_MAX_WIDTH = 768;
const MOBILE_MAX_HEIGHT = 500;

function checkIsMobile() {
  return (
    typeof window !== "undefined" &&
    (window.innerWidth < MOBILE_MAX_WIDTH ||
      window.innerHeight <= MOBILE_MAX_HEIGHT)
  );
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return isMobile;
}
