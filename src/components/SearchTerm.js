import React from 'react';

class SearchTerm extends React.Component {
    constructor() {
        super()
            this.state = {
                searchTerm: "",
            }
        }
    
    handleSearchTermChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.performSearch(this.state.searchTerm)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="don't get hangry, search me"
                    onChange={this.handleSearchTermChange}
                    value={this.state.searchTerm}
                />
                <input type="submit" results="0"/>
            </form>
        );
    }
}

export default SearchTerm;