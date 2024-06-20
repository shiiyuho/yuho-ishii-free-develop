import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = (event) => {
    event.preventDefault();
    // 登録成功メッセージを表示してクイズ画面に遷移
    setMessage("Registration successful!");
    router.push("/quiz");
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} text-2xl font-bold mb-4`}>
        新規登録画面
      </h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <div className={styles.inputGroup}>
          <label
            htmlFor="username"
            className={`${styles.label} block text-sm font-medium text-gray-700`}
          >
            ユーザー名
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`${styles.input} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label
            htmlFor="password"
            className={`${styles.label} block text-sm font-medium text-gray-700`}
          >
            パスワード
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
        </div>
        <button
          type="submit"
          className={`${styles.button} w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          登録
        </button>
      </form>
      {message && (
        <p className={`${styles.message} mt-2 text-sm text-red-600`}>
          {message}
        </p>
      )}
      <button
        onClick={handleBack}
        className={`${styles.button} w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-4`}
      >
        ログイン画面に戻る
      </button>
    </div>
  );
};

export default Register;
