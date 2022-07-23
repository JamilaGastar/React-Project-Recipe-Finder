import React from 'react';

class Breakfast extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.recipe.recipe.image} alt=""/>
                <h2>{this.props.recipe.recipe.label}</h2>
                <a href={this.props.recipe.recipe.url} target="popup">JUMP TO RECIPE</a> 
            </div>
        );
    }
}

export default Breakfast;
