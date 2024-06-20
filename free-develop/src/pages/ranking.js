import { useRouter } from "next/router";
import styles from "../styles/Ranking.module.css";

const Ranking = () => {
  const router = useRouter();

  const handleBackToResult = () => {
    router.push("/result");
  };

  const handleBackToQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ランキング</h1>
      <div className={styles.rankingSection}>
        <h2 className={styles.subtitle}>全体ランキング</h2>
        {/* ここに全体ランキングのデータが入ります */}
        <ul className={styles.rankingList}>
          <li className={styles.rankingItem}>1. ユーザー名A - スコア</li>
          <li className={styles.rankingItem}>2. ユーザー名B - スコア</li>
          <li className={styles.rankingItem}>3. ユーザー名C - スコア</li>
          {/* 他のランキングデータ */}
        </ul>
      </div>
      <div className={styles.rankingSection}>
        <h2 className={styles.subtitle}>デイリーランキング</h2>
        {/* ここにデイリーランキングのデータが入ります */}
        <ul className={styles.rankingList}>
          <li className={styles.rankingItem}>1. ユーザー名D - スコア</li>
          <li className={styles.rankingItem}>2. ユーザー名E - スコア</li>
          <li className={styles.rankingItem}>3. ユーザー名F - スコア</li>
          {/* 他のランキングデータ */}
        </ul>
      </div>
      <button onClick={handleBackToResult} className={styles.button}>
        戻る
      </button>
      <button onClick={handleBackToQuiz} className={styles.button}>
        クイズに戻る
      </button>
    </div>
  );
};

export default Ranking;
