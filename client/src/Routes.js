import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";

//Dashboard
import Dashboard from "./components/dashboard/Dashboard";
import Line from "./components/line/Line";
import Pie from "./components/pie/Pie";
import Bar from "./components/bar/Bar";
import Map from "./components/map/Map";

//Admin Panel
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Data from "./components/data/Data";
import DataDate from "./components/dataDate/DataDates";
import Maps from "./components/maps/Maps";
import history from "./history";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/line" exact component= {Line}/>
                    <Route path="/pie" exact component={Pie} />
                    <Route path="/bar" component={Bar}/>
                    <Route path="/map" component={Map} />

                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/data" component={Data} />
                    <Route path="/dataDate" component={DataDate} />
                    <Route path="/maps" component ={Maps} />
                </Switch>
            </Router>
        )
    }
}