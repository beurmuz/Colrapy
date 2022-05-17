import { BrowserRouter , Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Main from './components/pages/main_page/main';
import Login from './components/pages/login_page/login';
import Join from './components/pages/join_page/join';
import Findpw from './components/pages/findpw_page/findpw';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={ <Main /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/join' element={ <Join /> } />
            <Route path='/findpw' element={ <Findpw /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
