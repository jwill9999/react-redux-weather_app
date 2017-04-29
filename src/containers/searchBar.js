import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {   


    constructor(props) {
        super(props)

        this.state = {
            term: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group margin-top">
                <input
                    onChange={this.onInputChange}
                    value={this.state.term}
                    className="form-control"
                    type="text"
                    placeholder="Enter UK city name to see your next five day forcast.... "
                />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit" >Submit</button>
                </span>
            </form>
        )
    }

    // on form submission 
    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term)
        //reset form
        this.setState({
            term: ""
        })
    }

    // on any input change we set state within class
    onInputChange(event) {

        this.setState({
            term: event.target.value
        })
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);

// container setup process
// import connect
// import bindactioncreators
// by binding actions we can use fetchWeather now as this.props to call the action function.
// e.g function mapDispatchToProps(dispatch){
//     return bindActionCreators({fetchWeather}, dispatch)
// }