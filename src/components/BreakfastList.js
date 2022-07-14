import React from 'react';

class BreakfastList extends React.Component {

    render() {
        // console.log(this.props.breakfastRecipes)
        return (
            <div className='breakfastRecipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                {/* <div style={{columnCount: "2"}}>
                    {this.props.breakfastRecipes.hits.map((element) => {
                    return (
                        <div>
                        <img src={element.recipe.image} alt=""/>
                        <h2>{element.recipe.label}</h2>
                        <a href={element.recipe.url} target="popup">JUMP TO RECIPE</a> 
                        </div>
                        )
                    })}
                </div> */}
            </div>
        );
    }
}

export default BreakfastList;
