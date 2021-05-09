import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createUseStyles } from 'react-jss';
import Falcon9 from './Falcon9';
import FalconHeavy from './FalconHeavy';
import Starship from './Starship';

const useStyles = createUseStyles({
    nav: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "25px",
        backgroundColor: "#003B73",
        paddingBottom: "25px"
    },
    link: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontFamily: "Helvetica",
        fontSize: "20px"
    }
})

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