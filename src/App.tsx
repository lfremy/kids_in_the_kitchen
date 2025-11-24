import Header from './components/Header';
import Footer from './components/Footer';
import WorkshopDetail from './components/WorkShopDetails';
import Home from './pages/Home';
import WorkShop from './pages/Workshop';
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ateliers" element={<WorkShop />} />
             <Route path="/ateliers/:id" element={<WorkshopDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
