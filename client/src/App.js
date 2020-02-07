import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./hoc/SaveBooks";
import SearchBooks from "./hoc/SearchBooks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './Resources/css/styles.css'


function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={SearchBooks} />
                    <Route exact path="/saved" component={SaveBooks} />
                    <Route exact path="/saved/:id" component={SaveBooks} />
                </Switch>
                <br />
                <Footer />
            </div>
        </Router>
    );
}

export default App;