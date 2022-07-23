import React from 'react'
import SearchValue from '../components/SearchValue';
import RecipeList from '../components/RecipeList';

class RecipeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }

   performSearch = (searchValue) => {
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=a81919ae&app_key=be49d2601919ceeda4a620dde73a2b45&imageSize=REGULAR`
        fetch(recipeUrl)
        .then(response => response.json())
        .then((data) => this.setRecipesInState(data))
    }

    setRecipesInState = (data) => {
        this.setState({
            recipes: data
        }, 
        );
    }


    render() {
        return (
            <div>
                <h1>the hungry girl.</h1>
                <h2>RECIPE FINDER</h2>
                <div className='text'>
                  <p>Created by a hungry, time poor girl bringing recipes to you at your convenience.</p>
                  <p>Whether you're looking for inspiration, feel like using a certain ingredient but not sure what to cook, or know what you want but just need a recipe to follow, she's got you covered.</p>
                  <p>Type in the key word(s) of what you're looking for and 20 options will appear, or search via our meal type collections above!</p>
                </div>
                <br/>
                <SearchValue performSearch={this.performSearch}/>
                <RecipeList recipes={this.state.recipes}/>
            </div>
        );
    }
}


export default RecipeContainer;
