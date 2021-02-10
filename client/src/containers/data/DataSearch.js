import React, { Component } from 'react';

export default class DataSearch extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;  
        const name = target.name;
        // target.type === 'checkbox' ? target.checked :

        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form className="row mb-3">
                <div className="col-sm-4 d-flex">
                    <label className="col-form-label mr-2">Letter</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="A"
                        aria-label="Letter"
                        name="letter"
                      value={this.props.SearchLetter}
                       onChange= {this.props.onSearchLetter} />
                </div>
                <div className="col-sm-4 d-flex">
                    <label className="col-form-label mr-2">Frequency</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="0.0000"
                        aria-label="Frequency"
                        name="frequency"
                        value={this.props.searchFrequency}
                        onChange={this.props.onSearchFrequency} />
                </div>
            </form>
        )
    }
}
