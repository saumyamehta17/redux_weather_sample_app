import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.inputChange = this.inputChange.bind(this)
    }
    inputChange(event){
        this.setState({term: event.target.value})
    }
    formSubmission(event){
        event.preventDefault()
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

export default SearchBar;