import { BrowserRouter , Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Home from './pages/home/home';
import Main from './pages/main/main';
import Login from './pages/login/login';
import Diary from './pages/diary/diary';
import Poll from './pages/poll/poll';
import Result from './pages/result/result';
import ChooseTemplates from './pages/templates/templates';
import Paint from './pages/paint/paint';
import Canvas from './pages/canvas/canvas';
import Profile from './pages/profile/profile';

import loginData from './data/login.json';
import resultData from './data/result.json';

function App() {
  return (
    <div className={styles.app}>
        <BrowserRouter>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>
            <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route path='/main' element={ <Main username={'사용자'}/> } />
              <Route path='/users/login' element={ <Login/> } />
              <Route path='/diary' element={ <Diary /> } />
              <Route path='/profile' element={ <Profile /> } />
              <Route path='/diary/result' element={ <Result username={'사용자'} resultData={resultData}/> } />
              <Route path='/canvas/templates' element={ <ChooseTemplates resultData={resultData}/> } />
              <Route path='/canvas/paint' element={ <Paint resultData={resultData}/> } />
              <Route path='/canvas/poll' element={ <Poll username={'사용자'} /> } />
              <Route path='/canvas' element={ <Canvas /> } />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
