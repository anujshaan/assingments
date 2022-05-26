import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PageRender from './PageRender';
import Header from './components/global/Header';
import Feeds from './pages/feeds';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Feeds/>}/>
          <Route path="/:page" element={<PageRender/>}/>
          <Route path="/:page/:slug" element={<PageRender/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
