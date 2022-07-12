import React from 'react';

class RecipeList extends React.Component {

    renderImages = (element) => {
        return <img src={element.recipe.image} alt=""/>
    };

    render() {
        return (
            <div>
           {this.props.recipes.hits.map((element) => this.renderImages(element))}
            </div>
        );
    }
}

export default RecipeList;
