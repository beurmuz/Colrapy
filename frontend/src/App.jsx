import { BrowserRouter , Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Join from './pages/join/join';
import Diary from './pages/diary/diary';
import Poll from './pages/poll/poll';
import Mypage from './pages/mypage/mypage';
import Result from './pages/result/result';
import ChooseTemplates from './pages/templates/templates';
import Paint from './pages/paint/paint';

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
            <Route path='/canvas/templates' element={ <ChooseTemplates /> } />
            <Route path='/canvas/paint' element={ <Paint /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
