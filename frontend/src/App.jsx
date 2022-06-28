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
  const recommand_colors = [
    { 
      color: '연두색', 
      code:  '#81BF48', 
      effet: '연두색은 외로움과 신경쇠약 완화에 좋아요. 위안받고 싶은 날, 피로 회복이 필요한 날에 보면 좋은 색이예요.',
      imageUrl: '/images/template_image/yg.png'
    },
    { 
      color: '초록색', 
      code: '#007438', 
      effet: '초록색은 편안함과 안정감을 주는 색상이예요. 피로감을 덜어주고 긴장을 완화시켜주며, 감정의 균형을 잡아주는 색이예요.',
      imageUrl: '/images/template_image/green1.png'
    },
    { 
      color: '청록색',
      code: '#005566', 
      effet: '청록색은 호기심, 자유, 창조, 나만의 공간을 의미해요. 끈기가 없거나 방황할 때 자주 나오는 색상이기도 해요. ',
      imageUrl: '/images/template_image/blue_easy1.jpg'
    }
  ];
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
            <Route path='/diary/result' element={ <Result username={'사용자'} recommand_colors={recommand_colors}/> } />
            <Route path='/canvas/templates' element={ <ChooseTemplates recommand_colors={recommand_colors}/> } />
            <Route path='/canvas/paint' element={ <Paint recommand_colors={recommand_colors}/> } />
            <Route path='/canvas/poll' element={ <Poll username={'사용자'} /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
