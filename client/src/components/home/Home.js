import React, { Component } from 'react';
import Navbar from '../Navbar'
import './Home.css'

export default class Card extends Component {
    render() {
        const email = localStorage.getItem("email")
        console.log(email)
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-4">Welcome, {email}!</h1>
                    </div>
                </div>
            </div>
        )
    }
}