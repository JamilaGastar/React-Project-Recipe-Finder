import React from 'react';

class RecipeList extends React.Component {

    render() {
        // console.log(this.props.recipes)
        return (
            <div className='recipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)' }}>
                <div>
                    {this.props.recipes.hits.map((element) => {
                    return (
                        <div>
                        <img src={element.recipe.image} alt=""/>
                        <h2>{element.recipe.label}</h2>
                        <a href={element.recipe.url} target="popup">JUMP TO RECIPE</a> 
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default RecipeList;
