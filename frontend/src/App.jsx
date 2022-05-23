import { BrowserRouter , Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Main from './components/pages/main_page/main';
import Login from './components/pages/login_page/login';
import Join from './components/pages/join_page/join';
// import Findpw from './components/pages/findpw_page/findpw';
import Diary from './components/pages/diary_page/diary';
import Poll from './components/pages/poll_page/poll';
import Mypage from './components/pages/mypage_page/mypage';
import Result from './components/pages/result_page/result';
import ChooseTemplates from './components/pages/choose_templates_page/choose_templates';

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
            <Route path='/user/login' element={ <Login /> } />
            <Route path='/user/join' element={ <Join /> } />
            {/* <Route path='/user/findpw' element={ <Findpw /> } /> */}
            <Route path='/diary' element={ <Diary /> } />
            <Route path='/canvas/poll' element={ <Poll /> } />
            <Route path='/user/mypage' element={ <Mypage /> } />
            <Route path='/diary/result' element={ <Result /> } />
            <Route path='/diary/choose_templates' element={ <ChooseTemplates /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
