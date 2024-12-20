import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import SecondPage from './pages/second';
import ChristmasPage from "./pages/christmas";

function App() {
    return (
        <Router>
            <Switch> {/* Use Switch to wrap your Routes */}
                <Route path="/secondpage" exact component={SecondPage} /> {/* Use component prop in Route */}
                <Route path="/christmas" exact component={ChristmasPage} />
                <Route path="/" exact component={Homepage} /> {/* Use component prop in Route */}
            </Switch>
        </Router>
    );
}

const Homepage = () => {
    return (
        <div className="container">
            <h1 className="message">Hey, we planned a surprise for you!</h1>
            <NavLink to='/christmas' className="surprise-btn">Reveal</NavLink>
        </div>

    );
}

export default App;
