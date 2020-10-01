import React, { Component } from 'react';

class SearchInput extends Component {

    state = {
        input: ''
    }

    onInputChange = (value) => {
        this.setState({ input : value }, ()=>{
            this.props.handleSearchValue(this.state.input)
        })
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search for Last Name" 
                    value={this.state.input} 
                    onChange={(e)=> this.onInputChange(e.target.value) }/>
            </div>
        )
    }
}

export default SearchInput;