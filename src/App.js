
import { Header } from './components/Header/header.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/search.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={''} className="App-logo" alt="logo" />
      </header>

      <Header/>
      <Search />
    </div>
  );
}

export default App;
