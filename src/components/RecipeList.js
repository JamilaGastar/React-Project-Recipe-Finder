import React from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {

    render() {
        if (this.props.recipes.hits) {
            return (
                <div className='recipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                    <div style={{columnCount: "2"}}>
                        {this.props.recipes.hits.map((element) => {
                        return <Recipe recipe={element}/>
                        })}
                    </div>
                </div>
            );
        }
        return <></>
    }
}

export default RecipeList;
