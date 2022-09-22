
import { Header } from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/search.component';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { History } from './components/History/history.components';
import { User } from './components/User/user.component';
import { UserInfo } from './components/UserInfo/userInfo.component';

function App() {
  return (
    <div className="App">
      <Header />
        
        <div>
        <Routes>
            <Route path='/' element={<Search />}></Route>
            <Route path='/history' element={<History />}></Route>
            <Route path='/user/:login' element={<UserInfo />}></Route>
        </Routes>
        </div>
      
    </div>
  );
}

export default App;
