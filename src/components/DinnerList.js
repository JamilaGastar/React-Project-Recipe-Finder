import React from 'react';

class DinnerList extends React.Component {

    render() {
        // console.log(this.props.lunchRecipes)
        return (
            <div className='dinnerRecipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                <div style={{columnCount: "2"}}>
                    {this.props.dinnerRecipes.hits.map((element) => {
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


export default DinnerList;
