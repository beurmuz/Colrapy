import styles from './app.module.css';
import Header from './components/header';
import Main from './components/pages/main';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Main />
      </div>
    </div>
  );
}

export default App;
