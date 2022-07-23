import React from 'react';
import Lunch from './Lunch';

class LunchList extends React.Component {

    render() {
        if (this.props.lunchRecipes.hits) {
        return (
            <div className='lunchRecipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                <div style={{columnCount: "2"}}>
                    {this.props.lunchRecipes.hits.map((element) => {
                    return <Lunch recipe={element}/>
                    })}
                </div>
            </div>
        );
    } return <></>
  }
}


export default LunchList;
