import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-NZGZ01XX4C');

const TrackPageView = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);

    return children;
};

const RootComponent = () => (
    <Router>
        <TrackPageView>
            <App />
        </TrackPageView>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
