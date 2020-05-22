import React, {Component} from 'react';
import { Paper, TextField} from '@material-ui/core';






class SearchBar extends Component{

    state = {
        searchTerm:''
    }

    handleChange = (e) => {
        this.setState({searchTerm : e.target.value});
    }
    
    handleSubmit = () => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }


//so as to ot bind the function,  we define the functions as arowfunctions
//because they do no thave any 'this' of their own.
    render(){
        return(
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..."
                    onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}
export default SearchBar;