import { useState, useMemo } from "react";

import { revisionQuestions } from "../data/revisionQuestions";
import { useIsMobile } from "../hooks/useIsMobile";

const QUESTIONS_PER_QUIZ = 10;

const MESSAGES_BY_TIER = {
  low: [
    "Ce n'est qu'un début : reprenez un peu la carte et retentez votre chance, ça va venir !",
    "Certaines notions demandent plusieurs passages. Retournez explorer les fiches qui vous ont posé problème, puis recommencez quand vous voulez.",
    "Encore un peu de révision et ce score va grimper vite. Pas de découragement, c'est en revoyant la carte qu'on progresse.",
  ],
  mid: [
    "Bon score ! Encore quelques notions à consolider et ce sera parfait.",
    "Vous maîtrisez déjà pas mal de notions, continuez sur cette lancée !",
    "Belle performance : quelques révisions ciblées et le sans-faute est à portée de main.",
  ],
  high: [
    "Excellent ! Vous maîtrisez remarquablement bien les auteur·ices et les concepts de l'atlas.",
    "Bravo, score quasi parfait : ces notions n'ont plus de secret pour vous !",
    "Impressionnant ! Vous avez toutes les cartes en main pour cette partie du programme.",
  ],
};

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function buildQuiz() {
  const picked = shuffle(revisionQuestions).slice(0, QUESTIONS_PER_QUIZ);

  return picked.map((question) => ({
    ...question,
    choices: shuffle([
      { text: question.correctAnswer, isCorrect: true },
      ...question.distractors.map((text) => ({ text, isCorrect: false })),
    ]),
  }));
}

function tierForScore(score) {
  if (score <= 5) return "low";
  if (score <= 8) return "mid";
  return "high";
}

function pill(text) {
  return (
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
        marginBottom: 14,
      }}
    >
      {text}
    </div>
  );
}

export default function RevisionMode({ onClose }) {
  const isMobile = useIsMobile();

  const [quiz, setQuiz] = useState(() => buildQuiz());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Le message de fin est tiré une seule fois par partie (pas à chaque
  // rendu) pour ne pas changer sous les yeux de l'étudiant·e.
  const [finishMessage, setFinishMessage] = useState("");

  const currentQuestion = quiz[currentIndex];
  const isLastQuestion = currentIndex === quiz.length - 1;
  const hasAnswered = selectedChoiceIndex !== null;

  const entityLabel = useMemo(() => {
    if (!currentQuestion) return "";
    return currentQuestion.entityType === "author" ? "Auteur·ice" : "Concept";
  }, [currentQuestion]);

  function handleSelect(index) {
    if (hasAnswered) return;

    setSelectedChoiceIndex(index);

    if (currentQuestion.choices[index].isCorrect) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      const tier = tierForScore(score);
      const options = MESSAGES_BY_TIER[tier];
      setFinishMessage(options[Math.floor(Math.random() * options.length)]);
      setFinished(true);
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedChoiceIndex(null);
  }

  function handleRestart() {
    setQuiz(buildQuiz());
    setCurrentIndex(0);
    setSelectedChoiceIndex(null);
    setScore(0);
    setFinished(false);
    setFinishMessage("");
  }

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 2000,
    background: "var(--color-paper)",
    display: "flex",
    justifyContent: "center",
    alignItems: isMobile ? "stretch" : "center",
    overflowY: "auto",
    padding: isMobile ? 0 : "40px 20px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: 640,
    background: "var(--color-paper-dim)",
    border: isMobile ? "none" : "1px solid var(--color-taupe)",
    borderRadius: isMobile ? 0 : 12,
    padding: isMobile ? "24px 20px" : "32px 36px",
    minHeight: isMobile ? "100%" : undefined,
    boxShadow: isMobile ? "none" : "0 8px 30px rgba(43,38,32,0.18)",
  };

  const closeButton = (
    <button
      onClick={onClose}
      className="icon-button"
      aria-label="Fermer le mode révision"
      title="Fermer"
      style={{
        position: "absolute",
        top: isMobile ? 16 : 24,
        right: isMobile ? 16 : 24,
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
      }}
    >
      ×
    </button>
  );

  return (
    <div style={overlayStyle}>
      <div style={{ ...cardStyle, position: "relative" }}>
        {closeButton}

        {!finished ? (
          <>
            {pill("Mode révision")}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 18,
              }}
            >
              <h2 style={{ margin: 0 }}>
                Question {currentIndex + 1} / {quiz.length}
              </h2>
              <span style={{ fontSize: 13, color: "var(--color-taupe)" }}>
                {entityLabel}
              </span>
            </div>

            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: "var(--color-paper)",
                overflow: "hidden",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${((currentIndex + (hasAnswered ? 1 : 0)) / quiz.length) * 100}%`,
                  background: "var(--color-tardis)",
                  transition: "width .25s",
                }}
              />
            </div>

            <p
              style={{
                whiteSpace: "pre-wrap",
                fontSize: 16,
                lineHeight: 1.5,
                marginBottom: 24,
              }}
            >
              {currentQuestion.prompt}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {currentQuestion.choices.map((choice, index) => {
                const isSelected = selectedChoiceIndex === index;
                const revealCorrect = hasAnswered && choice.isCorrect;
                const revealWrong = hasAnswered && isSelected && !choice.isCorrect;

                let borderColor = "var(--color-taupe)";
                let background = "var(--color-paper)";
                let color = "var(--color-ink)";

                if (revealCorrect) {
                  borderColor = "var(--color-tardis)";
                  background = "var(--color-tardis)";
                  color = "var(--color-paper)";
                } else if (revealWrong) {
                  borderColor = "var(--color-tension)";
                  background = "var(--color-tension)";
                  color = "var(--color-paper)";
                } else if (hasAnswered) {
                  color = "var(--color-taupe)";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleSelect(index)}
                    disabled={hasAnswered}
                    style={{
                      textAlign: "left",
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: `1px solid ${borderColor}`,
                      background,
                      color,
                      fontSize: 14,
                      lineHeight: 1.4,
                      cursor: hasAnswered ? "default" : "pointer",
                      fontFamily: "var(--font-body)",
                      transition: "background .15s, border-color .15s",
                    }}
                  >
                    {choice.text}
                    {revealCorrect && " ✓"}
                    {revealWrong && " ✗"}
                  </button>
                );
              })}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
              <button
                onClick={handleNext}
                disabled={!hasAnswered}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  background: hasAnswered ? "var(--color-tardis)" : "var(--color-taupe)",
                  color: "var(--color-paper)",
                  fontWeight: 600,
                  cursor: hasAnswered ? "pointer" : "default",
                  opacity: hasAnswered ? 1 : 0.6,
                }}
              >
                {isLastQuestion ? "Voir mon score" : "Question suivante"}
              </button>
            </div>
          </>
        ) : (
          <>
            {pill("Résultat")}

            <h2 style={{ marginTop: 0 }}>Mode révision terminé</h2>

            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 48,
                fontWeight: 600,
                color: "var(--color-tardis)",
                margin: "12px 0",
              }}
            >
              {score} / {quiz.length}
            </div>

            <p style={{ fontSize: 16, lineHeight: 1.5 }}>{finishMessage}</p>

            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <button
                onClick={handleRestart}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "1px solid var(--color-tardis)",
                  background: "var(--color-tardis)",
                  color: "var(--color-paper)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Recommencer
              </button>

              <button
                onClick={onClose}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "1px solid var(--color-taupe)",
                  background: "var(--color-paper)",
                  color: "var(--color-ink)",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Retour à la carte
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
