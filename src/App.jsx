import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Aboutbraininjurypage from './pages/Aboutbraininjurypage';
import Events from './pages/Events';
import EventsDetail from './pages/EventsDetail';
import EventsAdmin from './pages/EventsAdmin';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main>
          <Routes>
            {/* Existing Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about-brain-injury" element={<Aboutbraininjurypage />} />
            
            {/* Events Routes */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventsDetail />} />
            
            {/* Admin Routes */}
            <Route path="/admin/events" element={<EventsAdmin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;