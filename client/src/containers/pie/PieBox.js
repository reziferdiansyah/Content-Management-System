import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class PieBox extends Component {

    render() {
        const chart = {
            labels: this.props.labels,
            datasets: [
                {
                    data: [300, 50, 100, 40],
                    backgroundColor: [
                        '#FF0000',
                        '##FFFF00',
                        '#FFCE56',
                        '#00FFFF'
                    ],
                    hoverBackgroundColor: [
                        '#FF0000',
                        '#36A2EB',
                        '#FFCE56',
                        '#00FFFF'
                    ],
                    
                }
            ]
        }
        return (
            <div>
                <h2><b>Pie Chart</b></h2>
                <Pie
                    ref="chart"
                    height={100}
                    data={chart}
                />
            </div>
        )
    }
}