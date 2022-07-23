import React from 'react';
import Dinner from './Dinner';

class DinnerList extends React.Component {

    render() {
        if (this.props.dinnerRecipes.hits) {
        return (
            <div className='dinnerRecipeContainer' style={{backgroundColor: 'rgb(89, 69, 69, 0.9)'}} >
                <div style={{columnCount: "2"}}>
                    {this.props.dinnerRecipes.hits.map((element) => {
                    return <Dinner recipe={element}/>
                    })}
                </div>
            </div>
        );
       } return <></>
    }
}


export default DinnerList;
