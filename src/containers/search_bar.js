import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchWeather from '../actions';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.inputChange = this.inputChange.bind(this);
        this.formSubmission = this.formSubmission.bind(this)
    }
    inputChange(event){
        this.setState({term: event.target.value})
    }
    formSubmission(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }
    render(){
        return (<form onSubmit={this.formSubmission} className="input-group">
            <input value={this.state.term}
                   placeholder="Enter city"
                   className="form-control"
                   onChange={this.inputChange}/>
            <span className="input-group-btn">
                <button type="submit"  className="btn btn-info">Submit</button>
            </span>
        </form>)
    }
}

export default connect(null,{fetchWeather})(SearchBar);