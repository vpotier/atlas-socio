import { useState, useEffect, useRef } from "react";

import Graph from "./components/Graph";
import SearchBar from "./components/SearchBar";
import FiltersPanel from "./components/FiltersPanel";
import Legend from "./components/Legend";
import { useIsMobile } from "./hooks/useIsMobile";
import { formatPerson, formatAuthorById } from "./utils/format";
import { constellations } from "./engine/constellations";
import { axes, constellationAxisValues } from "./data/theoreticalAxes";
import { authorAxisValues } from "./data/authorAxisValues";

import "./styles/app.css";

export default function App() {
  const isMobile = useIsMobile();
  const [selectedItem, setSelectedItem] = useState(null);

  // Mode "découverte" : contenu très simplifié, pensé pour un public
  // néophyte. Persisté d'une visite à l'autre.
  const [discoveryMode, setDiscoveryMode] = useState(() => {
    try {
      return localStorage.getItem("atlas-discovery-mode") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("atlas-discovery-mode", String(discoveryMode));
    } catch {
      // stockage local indisponible : le mode reste actif pour la
      // session en cours seulement, sans bloquer l'application.
    }
  }, [discoveryMode]);

  const [axisFilters, setAxisFilters] = useState({
    individuSociete: { enabled: false, value: 0.5 },
    methode: { enabled: false, value: 0.5 },
    rationalite: { enabled: false, value: 0.5 },
  });

  const [themeFilters, setThemeFilters] = useState([]);

  const [relationTypeFilters, setRelationTypeFilters] = useState({
    heritage: true,
    dialogue: true,
    tension: true,
  });

  // Sur mobile, la fiche latérale ne s'affiche normalement que lorsqu'un
  // élément est sélectionné (pour laisser la carte plein écran). Ce
  // bouton permet d'ouvrir quand même le panneau d'accueil (crédits,
  // aide) sans rien sélectionner.
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);

  const closeSheet = () => {
    setSelectedItem(null);
    setMobileHomeOpen(false);
  };

  // Fermer la fiche avec la touche Échap (ordinateur)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeSheet();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fermer la fiche en glissant vers le bas (mobile)
  const touchStartY = useRef(null);

  const handleSheetTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleSheetTouchEnd = (e) => {
    if (touchStartY.current === null) return;

    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    if (deltaY > 70) {
      closeSheet();
    }

    touchStartY.current = null;
  };

  const renderSidebar = () => {
    if (!selectedItem) {
      return (
        <>
          <div
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-taupe)",
              border: "1px solid var(--color-taupe)",
              borderRadius: 3,
              padding: "3px 8px",
              marginBottom: 14,
            }}
          >
            Atlas
          </div>

          <h2>Atlas des théories sociologiques</h2>

          <p style={{ color: "var(--color-taupe)" }}>
            Sélectionnez un auteur, un concept, une relation ou une
            constellation sur la carte.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 24,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid var(--color-taupe)",
              background: "var(--color-paper)",
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>
                Mode découverte
              </div>
              <div style={{ fontSize: 12, color: "var(--color-taupe)" }}>
                Des fiches simplifiées idéales pour découvrir la
                sociologie
              </div>
            </div>

            <button
              onClick={() => setDiscoveryMode((v) => !v)}
              aria-label="Activer ou désactiver le mode découverte"
              aria-pressed={discoveryMode}
              style={{
                position: "relative",
                width: 44,
                height: 24,
                borderRadius: 12,
                border: "1px solid var(--color-taupe)",
                background: discoveryMode
                  ? "var(--color-tardis)"
                  : "var(--color-paper-dim)",
                cursor: "pointer",
                flexShrink: 0,
                transition: "background .2s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: 2,
                  left: discoveryMode ? 22 : 2,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "var(--color-paper)",
                  transition: "left .2s",
                }}
              />
            </button>
          </div>

          <p style={{ marginTop: 20 }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem({ type: "help", data: {} });
              }}
              style={{ color: "var(--color-tardis)", fontWeight: 600 }}
            >
              Comment utiliser l'Atlas →
            </a>
          </p>

          <p
            style={{
              marginTop: 32,
              fontSize: 12,
              color: "var(--color-taupe)",
            }}
          >
            Par Victor Potier —{" "}
            <a
              href="mailto:victor.potier@univ-eiffel.fr"
              style={{ color: "var(--color-tardis)" }}
            >
              Me contacter
            </a>
          </p>
        </>
      );
    }

    const closeButton = (
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: -32,
          marginRight: -4,
          pointerEvents: "none",
        }}
      >
        <button
          onClick={closeSheet}
          className="icon-button"
          style={{
            border: "none",
            background: "var(--color-paper)",
            borderRadius: "50%",
            width: 32,
            height: 32,
            cursor: "pointer",
            fontSize: 18,
            lineHeight: "32px",
            textAlign: "center",
            color: "var(--color-taupe)",
            boxShadow: "0 1px 4px rgba(43,38,32,0.2)",
            pointerEvents: "auto",
          }}
          aria-label="Fermer"
          title="Fermer"
        >
          ×
        </button>
      </div>
    );

    const tabLabel = (text) => (
      <div
        style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--color-leather)",
          border: "1px solid var(--color-leather)",
          borderRadius: 3,
          padding: "3px 8px",
          marginBottom: 10,
        }}
      >
        {text}
      </div>
    );

    if (selectedItem.type === "help") {
      return (
        <>
          {closeButton}

          {tabLabel("Aide")}

          <h2>Comment utiliser l'Atlas</h2>

          <h3>Ce que contient l'Atlas</h3>

          <ul>
            <li>
              Une carte de <strong>63 auteur·ices</strong> de théorie
              sociologique, regroupé·es en 15 grands courants théoriques,
              auxquels s'ajoutent quelques auteur·ices-ponts qui ne se
              rattachent pleinement à aucun courant unique.
            </li>
            <li>
              <strong>Chaque point est cliquable</strong> et ouvre une
              fiche : auteur·ice, concept, ou courant théorique. Chaque
              trait reliant deux auteur·ices est lui aussi cliquable, et
              ouvre sa propre fiche synthétique et sourcée : héritage
              (marron), dialogue (bleu), tension (rouge, pointillé).
            </li>
            <li>
              L'ensemble des informations est <strong>sourcé</strong> :
              chaque fiche indique les références académiques sur
              lesquelles elle s'appuie.
            </li>
            <li>
              Un <strong>mode découverte</strong>, accessible depuis ce
              panneau d'accueil, propose des fiches très simplifiées,
              sans jargon, idéales pour une première approche de la
              sociologie. Il peut être activé ou désactivé à tout
              moment, le contenu complet reste toujours accessible juste
              à côté.
            </li>
          </ul>

          <h3>Se repérer sur la carte</h3>

          <ul>
            <li>
              <strong>Zoomer/dézoomer</strong> à la molette ou en
              pinçant (sur mobile), glisser pour se déplacer.
            </li>
            <li>
              Le <strong>bouton viseur</strong> (en haut à droite)
              recentre la vue sur l'ensemble de la carte.
            </li>
            <li>
              Cliquer sur le <strong>halo d'un courant théorique</strong>{" "}
              ouvre sa fiche : définition, période, disciplines qui
              l'ont nourri.
            </li>
            <li>
              Dans le panneau Filtres, il est possible d'
              <strong>afficher ou masquer chaque type de relation</strong>{" "}
              (héritage, dialogue, tension) indépendamment, pour alléger
              la carte et faciliter la lecture.
            </li>
          </ul>

          <h3>Si vous êtes étudiant·e</h3>

          <ul>
            <li>
              Il peut être utile de commencer par{" "}
              <strong>explorer la carte sans filtre</strong> : la
              disposition spatiale des courants théoriques, issue des
              relations effectivement documentées entre leurs
              auteur·ices, donne une première intuition de la manière
              dont ils s'articulent les uns aux autres.
            </li>
            <li>
              Cliquez sur un·e auteur·ice pour accéder à sa fiche
              complète (résumé, œuvres, concepts, influences). Utilisez
              la <strong>recherche</strong> pour retrouver rapidement un
              nom, un concept ou un courant.
            </li>
            <li>
              Le <strong>filtre par thème</strong> permet un premier
              balayage bibliographique ciblé — par exemple, en période
              de révision de partiels, pour retrouver rapidement
              l'ensemble des auteur·ices ayant travaillé sur un objet
              donné (les études de genre, la sociologie urbaine, etc.).
            </li>
          </ul>

          <h3>Si vous êtes enseignant·e</h3>

          <ul>
            <li>
              Les <strong>3 curseurs de filtre</strong> (Individu/Société,
              Méthode, Rationalité) permettent d'isoler les auteur·ices
              selon leur positionnement épistémologique, ce qui peut
              être utile pour construire une séance comparative.
            </li>
            <li>
              Il est possible de{" "}
              <strong>masquer certains types de relations</strong>{" "}
              (héritage, dialogue, tension) pour simplifier la lecture
              en cours et concentrer l'attention des étudiant·es sur un
              seul type de filiation.
            </li>
          </ul>

          <h3>Questions fréquentes</h3>

          <p>
            <strong>
              Pourquoi tel auteur·ice est-il/elle classé·e dans tel
              courant plutôt qu'un autre ?
            </strong>
            <br />
            Voir la note de classification affichée dans sa fiche.
          </p>

          <p>
            <strong>
              Les positions sur les 3 axes sont-elles définitives ?
            </strong>
            <br />
            Non, ce sont des lectures argumentées et sourcées, parfois
            disputées dans la littérature — voir la justification
            affichée pour chaque axe.
          </p>

          <p>
            <strong>Puis-je proposer une correction ou un ajout ?</strong>
            <br />
            Oui, via le lien{" "}
            <a
              href="mailto:victor.potier@univ-eiffel.fr"
              style={{ color: "var(--color-tardis)" }}
            >
              Me contacter
            </a>
            .
          </p>
        </>
      );
    }

    if (selectedItem.type === "author") {
      const a = selectedItem.data;

      return (
        <>
          {closeButton}

          {tabLabel("Auteur·ice")}

          <h2>{a.name}</h2>

          <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
            {a.period}
          </p>

          {discoveryMode ? (
            <p>
              {a.simple?.summary ??
                "Fiche simplifiée pas encore disponible pour cet auteur·ice — désactivez le mode découverte pour voir le contenu complet."}
            </p>
          ) : (
            <>
              <p>
                <strong>École</strong>
                <br />
                {a.school}
              </p>

              <p>{a.summary}</p>

              <h3>Classification</h3>

              <p>{a.classificationNote}</p>

              {(() => {
                const individualValues = authorAxisValues[a.id];
                const constellationValues =
                  constellationAxisValues[a.constellation];

                if (!individualValues && !constellationValues)
                  return null;

                return (
                  <>
                    <h3>Positionnement théorique</h3>

                    <ul>
                      {Object.entries(axes).map(([axisKey, axisMeta]) => {
                        const individual = individualValues?.[axisKey];
                        const value =
                          individual || constellationValues?.[axisKey];

                        if (!value) return null;

                        return (
                          <li key={axisKey}>
                            <strong>{axisMeta.label}</strong>
                            <br />
                            <span
                              style={{
                                fontStyle: "italic",
                                color: "var(--color-leather)",
                              }}
                            >
                              {value.label}
                            </span>
                            {value.justification && (
                              <span
                                style={{
                                  display: "block",
                                  marginTop: 4,
                                }}
                              >
                                {value.justification}
                              </span>
                            )}
                            {value.sources && (
                              <span
                                style={{
                                  display: "block",
                                  fontSize: 12,
                                  color: "var(--color-taupe)",
                                  marginTop: 4,
                                }}
                              >
                                {value.sources.join(" ; ")}
                              </span>
                            )}
                            {!individual && (
                              <span
                                style={{
                                  display: "block",
                                  fontSize: 12,
                                  fontStyle: "italic",
                                  color: "var(--color-taupe)",
                                  marginTop: 4,
                                }}
                              >
                                Valeur héritée de la constellation — pas
                                encore sourcée individuellement pour cet
                                auteur·ice.
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                );
              })()}
            </>
          )}

          <p>
            <strong>Sources</strong>
          </p>

          <ul>
            {a.sources.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h3>Concepts</h3>

          <ul>
            {a.concepts.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <h3>Œuvres</h3>

          <ul>
            {a.works.map((w, i) => (
              <li key={i} style={{ marginBottom: 10 }}>
                <span>{w.citation}</span>
                {w.sources && w.sources.length > 0 && (
                  <span
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontStyle: "italic",
                      color: "var(--color-taupe)",
                      marginTop: 4,
                    }}
                  >
                    Pour aller plus loin :{" "}
                    {w.sources.map((s, j) => (
                      <span key={j}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--color-tardis)" }}
                        >
                          {s.label}
                        </a>
                        {j < w.sources.length - 1 ? " ; " : ""}
                      </span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <h3>Influences</h3>

          <ul>
            {a.influences.map((i) => (
              <li key={i}>{formatPerson(i)}</li>
            ))}
          </ul>

          {a.heirs.length > 0 && (
            <>
              <h3>Héritiers</h3>

              <ul>
                {a.heirs.map((h) => (
                  <li key={h}>{formatPerson(h)}</li>
                ))}
              </ul>
            </>
          )}
        </>
      );
    }

    if (selectedItem.type === "concept") {
      const c = selectedItem.data;

      return (
        <>
          {closeButton}

          {tabLabel("Concept")}

          <h2>{c.label}</h2>

          <p>
            {discoveryMode
              ? c.simpleDefinition ??
                "Définition simplifiée pas encore disponible pour ce concept — désactivez le mode découverte pour voir la définition complète."
              : c.definition}
          </p>

          <h3>Auteurs concernés</h3>

          <ul>
            {c.authors.map((id) => (
              <li key={id}>{formatAuthorById(id)}</li>
            ))}
          </ul>
        </>
      );
    }

    if (selectedItem.type === "relation") {
      const r = selectedItem.data;

      const labels = {
        heritage: "Héritage",
        dialogue: "Dialogue",
        tension: "Tension",
      };

      return (
        <>
          {closeButton}

          {tabLabel("Relation")}

          <h2>{labels[r.type]}</h2>

          <p>
            <strong>Source</strong>
            <br />
            {r.sourceName}
          </p>

          <p>
            <strong>Cible</strong>
            <br />
            {r.targetName}
          </p>

          <p style={{ marginBottom: 4 }}>
            <strong>Force du lien</strong>
          </p>

          <div
            style={{
              display: "flex",
              gap: 3,
              marginBottom: 14,
            }}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                style={{
                  height: 6,
                  flex: 1,
                  borderRadius: 2,
                  background:
                    n <= r.strength
                      ? "var(--color-tardis)"
                      : "var(--color-paper-dim)",
                  border: "1px solid var(--color-taupe)",
                }}
              />
            ))}
          </div>

          {discoveryMode ? (
            <p>
              {r.simpleExplanation ??
                "Explication simplifiée pas encore disponible pour cette relation — désactivez le mode découverte pour voir le détail complet."}
            </p>
          ) : (
            <>
              <p>
                <strong>Consensus</strong>
                <br />
                {r.consensus}
              </p>

              <p>{r.justification}</p>

              <p>
                <strong>Sources</strong>
              </p>

              <ul>
                {r.sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>

              {[
                { name: r.sourceName, constellationId: r.sourceConstellation },
                { name: r.targetName, constellationId: r.targetConstellation },
              ].map(({ name, constellationId }) => {
                const cstMeta = constellations[constellationId];
                const axisValues = constellationAxisValues[constellationId];

                if (!cstMeta || !axisValues) return null;

                return (
                  <div key={name}>
                    <h3>Positionnement théorique — {name}</h3>

                    <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
                      {cstMeta.label}
                    </p>

                    <ul>
                      {Object.entries(axes).map(([axisKey, axisMeta]) => (
                        <li key={axisKey}>
                          <strong>{axisMeta.label}</strong>
                          <br />
                          {axisValues[axisKey]?.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </>
          )}
        </>
      );
    }

    if (selectedItem.type === "constellation") {
      const cst = selectedItem.data;

      return (
        <>
          {closeButton}

          {tabLabel("Constellation")}

          <h2 style={{ color: cst.color }}>{cst.label}</h2>

          {cst.period && (
            <p style={{ marginTop: -8, color: "var(--color-taupe)" }}>
              {cst.period}
            </p>
          )}

          {discoveryMode
            ? (constellations[cst.id]?.simpleDefinition ?? cst.definition) && (
                <p>
                  {constellations[cst.id]?.simpleDefinition ??
                    cst.definition}
                </p>
              )
            : cst.definition && <p>{cst.definition}</p>}

          {cst.disciplines && cst.disciplines.length > 0 && (
            <div style={{ marginBottom: 12 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--color-taupe)",
                  marginRight: 6,
                }}
              >
                Inspirée par :
              </span>

              {cst.disciplines.map((d) => (
                <span
                  key={d}
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    color: "var(--color-leather)",
                    border: "1px solid var(--color-leather)",
                    borderRadius: 3,
                    padding: "2px 7px",
                    marginRight: 6,
                    marginBottom: 4,
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          )}

          {!discoveryMode && constellationAxisValues[cst.id] && (
            <>
              <h3>Positionnement théorique</h3>

              <ul>
                {Object.entries(axes).map(([axisKey, axisMeta]) => (
                  <li key={axisKey}>
                    <strong>{axisMeta.label}</strong>
                    <br />
                    {constellationAxisValues[cst.id][axisKey]?.label}
                  </li>
                ))}
              </ul>
            </>
          )}

          <p>
            <strong>{cst.members.length}</strong>{" "}
            auteur(e)s dans cette constellation.
          </p>

          <ul>
            {cst.members.map((m) => (
              <li
                key={m.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setSelectedItem({
                    type: "author",
                    data: m,
                  })
                }
              >
                {m.name} <span style={{ color: "var(--color-taupe)" }}>({m.period})</span>
              </li>
            ))}
          </ul>
        </>
      );
    }

    return null;
  };

  return (
    <div
      className="app-fade-in app-root"
      style={{
        display: "flex",
        fontFamily: "var(--font-body)",
        position: "relative",
        background: "var(--color-paper)",
      }}
    >
      <SearchBar setSelectedItem={setSelectedItem} />

      <FiltersPanel
        axisFilters={axisFilters}
        setAxisFilters={setAxisFilters}
        themeFilters={themeFilters}
        setThemeFilters={setThemeFilters}
        relationTypeFilters={relationTypeFilters}
        setRelationTypeFilters={setRelationTypeFilters}
      />

      <Legend />

      {isMobile && (
        <button
          onClick={() => {
            setSelectedItem(null);
            setMobileHomeOpen(true);
          }}
          className="icon-button floating-info"
          aria-label="Informations et crédits"
          title="Informations et crédits"
        >
          i
        </button>
      )}

      <div style={{ flex: 1, padding: 20, minWidth: 0, overflow: "hidden" }}>
        <Graph
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          axisFilters={axisFilters}
          themeFilters={themeFilters}
          relationTypeFilters={relationTypeFilters}
        />
      </div>

      {(!isMobile || selectedItem || mobileHomeOpen) && (
        <aside
          className={isMobile ? "mobile-sheet" : undefined}
          onTouchStart={isMobile ? handleSheetTouchStart : undefined}
          onTouchEnd={isMobile ? handleSheetTouchEnd : undefined}
          style={
            isMobile
              ? {
                  position: "fixed",
                  bottom: 0,
                  maxHeight: "70vh",
                  background: "var(--color-paper-dim)",
                  borderTop: "1px solid var(--color-taupe)",
                  borderRadius: "14px 14px 0 0",
                  padding: 20,
                  paddingBottom:
                    "calc(20px + env(safe-area-inset-bottom, 0px))",
                  overflowY: "auto",
                  zIndex: 1500,
                  boxShadow: "0 -4px 16px rgba(43,38,32,0.25)",
                }
              : {
                  width: "340px",
                  flexShrink: 0,
                  borderLeft: "1px solid var(--color-taupe)",
                  padding: 20,
                  background: "var(--color-paper-dim)",
                  overflowY: "auto",
                  position: "relative",
                }
          }
        >
          {isMobile && (
            <div
              style={{
                width: 40,
                height: 4,
                borderRadius: 2,
                background: "var(--color-taupe)",
                opacity: 0.5,
                margin: "-8px auto 12px",
              }}
            />
          )}

          <div
            key={
              selectedItem
                ? `${selectedItem.type}-${
                    selectedItem.data.id ??
                    selectedItem.data.label ??
                    `${selectedItem.data.source}-${selectedItem.data.target}`
                  }`
                : "empty"
            }
            className="sidebar-content"
          >
            {renderSidebar()}
          </div>
        </aside>
      )}
    </div>
  );
}
