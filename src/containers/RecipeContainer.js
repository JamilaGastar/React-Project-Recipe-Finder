import React from 'react'
import SearchTerm from '../components/SearchTerm';
import RecipeList from '../components/RecipeList';

class RecipeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
        }
    }

   performSearch = (searchTerm) => {
    const recipeUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=a81919ae&app_key=be49d2601919ceeda4a620dde73a2b45&imageSize=REGULAR`
        fetch(recipeUrl)
        .then(response => response.json())
        .then((data) => this.setRecipesInState(data))
    }

    setRecipesInState = (data) => {
        this.setState({
            recipes: data
        }, 
        // () => console.log(this.state.recipes)
        );
    }


    render() {
        return (
            <div>
                <h1>the hungry girl.</h1>
                <h2>RECIPE FINDER</h2>
                <p>Created by a hungry, impatient girl bringing recipes to you at your convenience.</p>
                    <p>Whether you're bored and wanting inspiration, in the mood for a specific ingredient but not sure what to cook, or know what you want but are looking for a recipe to follow, we've got you covered.</p>
                    <p>Type in the key word(s) of what you're looking for and 20 recipe options will generate, otherwise click based on meal type above!</p>
                <br/>
                <SearchTerm performSearch={this.performSearch}/>
                <br/>
                <RecipeList recipes={this.state.recipes}/>
                <br/>
            </div>
        );
    }
}


export default RecipeContainer;
