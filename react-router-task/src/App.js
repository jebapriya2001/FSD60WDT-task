import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import All from './pages/All';
import FullStackDevelopment from './pages/FullStackDevelopment';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/all" element={<All />} />
                <Route path="/fullstack-development" element={<FullStackDevelopment />} />
                <Route path="/data-science" element={<DataScience />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/career" element={<Career />} />
                {/* Add default route if needed */}
                <Route path="*" element={<All />} /> {/* Redirect to All if no matching route is found */}
            </Routes>
        </Router>
    );
}

export default App;
