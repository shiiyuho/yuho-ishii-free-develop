import { useState } from "react";
import quizData from "../data/quizData";
import styles from "../styles/Quiz.module.css";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.container}>
      {!quizStarted ? (
        <div className={styles.center}>
          <h1 className={styles.title}>AQにようこそ！！</h1>
          <button onClick={handleStartQuiz} className={styles.startButton}>
            クイズスタート
          </button>
        </div>
      ) : showResult ? (
        <div className={styles.center}>
          <h1 className={styles.title}>終了ーーー！</h1>
          <p className={styles.resultText}>
            あなたのスコアは: {score} / {quizData.length}
          </p>
          <button
            className={styles.startButton}
            onClick={() => {
              setQuizStarted(false);
              setCurrentQuestionIndex(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            結果画面へ
          </button>
        </div>
      ) : (
        <div className={styles.quiz}>
          <div className={styles.questionSection}>
            <div className={styles.questionCount}>
              <span>現在の問題数は、 {currentQuestionIndex + 1}</span>/
              {quizData.length}
            </div>
            <div className={styles.questionText}>
              {quizData[currentQuestionIndex].question}
            </div>
          </div>
          <div className={styles.answerSection}>
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerButtonClick(
                    option === quizData[currentQuestionIndex].answer
                  )
                }
                className={styles.answerButton}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
