import React from 'react';
import image from '../magnifyingglass.png'

class SearchValue extends React.Component {
    constructor() {
        super()
            this.state = {
                searchValue: "",
            }
        }
    
    handleSearchValueChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.performSearch(this.state.searchValue)
    }

    render() {
        return (
            <div className='searchContainer'>
             <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="don't get hangry, search me"
                    onChange={this.handleSearchValueChange}
                    value={this.state.searchValue}
                />
                <button type="submit" results="0">
                   <img className='magnifyingGlassImg' src={image} alt=""/>
                </button>
             </form>
            </div>
        );
    }
}

export default SearchValue;