import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Falcon9 from '../Falcon9';
import FalconHeavy from '../FalconHeavy';
import Starship from '../Starship';
import useStyles from './tabs-styles';


const App = () => {

    const classes = useStyles();
    useEffect(() => {
        document.title = "SpaceX Stuff"
    }, []);
    return (
        <Router>
            <div>
                <nav className={classes.nav}>
                    <div>
                        <Link className={classes.link} to="/falcon9">Falcon 9</Link>
                    </div>
                    <div>
                        <Link className={classes.link} to="/falcon-heavy">Falcon Heavy</Link>
                    </div>
                    <div>
                        <Link className={classes.link} to="/starship">Starship</Link>
                    </div>
                </nav>

                <Switch>
                    <Route path="/falcon9">
                        <Falcon9 />
                    </Route>
                    <Route path="/falcon-heavy">
                        <FalconHeavy />
                    </Route>
                    <Route path="/starship">
                        <Starship />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
};


export default App;