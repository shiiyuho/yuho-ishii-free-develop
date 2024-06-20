import { useRouter } from "next/router";
import styles from "../styles/Result.module.css";

const Result = ({ score, totalQuestions }) => {
  const router = useRouter();

  const handleGoToRanking = () => {
    router.push("/ranking"); // ランキング画面へ遷移（後ほど作成）
  };

  const handleGoToTitle = () => {
    router.push("/");
  };

  const handleRetryQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>お疲れ様でした</h1>
      <p className={styles.resultText}>
        あなたのスコアは: {score} / {totalQuestions}
      </p>
      <button onClick={handleGoToRanking} className={styles.button}>
        ランキング表示
      </button>
      <button onClick={handleGoToTitle} className={styles.button}>
        タイトルへ
      </button>
      <button onClick={handleRetryQuiz} className={styles.button}>
        再挑戦
      </button>
    </div>
  );
};

// デフォルトのプロップス（スコアと総質問数）
Result.defaultProps = {
  score: 0,
  totalQuestions: 10,
};

export default Result;
