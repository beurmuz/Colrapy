import styles from './app.module.css';
import Header from './components/header';
import Main from './components/pages/main_page/main';
import Login from './components/pages/login_page/login';
import Join from './components/pages/join_page/join';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        {/* <Main /> */}
        {/* <Login /> */}
        <Join />
      </div>
    </div>
  );
}

export default App;
