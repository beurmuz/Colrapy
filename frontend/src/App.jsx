import { BrowserRouter , Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Home from './pages/home/home';
import Main from './pages/main/main';
import Login from './pages/login/login';
// import Findpw from './pages/findpw/findpw';
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
            <Route exact path='/' element={ <Home /> } />
            <Route path='/main' element={ <Main username={'사용자'}/> } />
            <Route path='/user/login' element={ <Login /> } />
            <Route path='/user/join' element={ <Join /> } />
            {/* <Route path='/user/findpw' element={ <Findpw /> } /> */}
            <Route path='/diary' element={ <Diary /> } />
            <Route path='/user/mypage' element={ <Mypage /> } />
            <Route path='/diary/result' element={ <Result /> } username={'사용자'} />
            <Route path='/canvas/templates' element={ <ChooseTemplates /> } />
            <Route path='/canvas/paint' element={ <Paint /> } />
            <Route path='/canvas/poll' element={ <Poll username={'사용자'} /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
