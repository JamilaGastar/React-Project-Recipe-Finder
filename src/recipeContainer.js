import React from 'react';
import searchTerm from './SearchTerm';

class recipeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }
    }

   performSearch = (searchTerm) => {
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a81919ae&app_key=%2059b7d664460d80528e52d60e25858ed9%09%E2%80%94&imageSize=REGULAR
        `)
        .then(response => response.json())
        .then((recipes) => this.setGifsInState(recipes.data))
    }

    setGifsInState = (data) => {
        this.setState({
            recipes: data
        })
    }

    render() {
        return (
            <div>
                <searchTerm performSearch={this.performSearch}/>
            </div>
        );
    }
}


export default recipeContainer;
