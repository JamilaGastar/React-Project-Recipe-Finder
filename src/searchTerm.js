import React from 'react';

class searchTerm extends React.Component {
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
                    onChange={this.handleSearchTermChange}
                    value={this.state.searchTerm}
                />
                <input type="submit"/>
            </form>
        );
    }
}

export default searchTerm;