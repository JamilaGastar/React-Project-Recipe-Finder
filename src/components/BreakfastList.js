import React from 'react';
import Breakfast from './Breakfast';

class BreakfastList extends React.Component {

    render() {
        if (this.props.breakfastRecipes.hits) {
        return (
            <div className='breakfastRecipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                <div style={{columnCount: "2"}}>
                    {this.props.breakfastRecipes.hits.map((element) => {
                        return <Breakfast recipe={element}/>
                        })}
                </div>
            </div>
        );
      } return <></>
   }
}

export default BreakfastList;
