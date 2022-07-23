import React from 'react';
import DinnerList from '../components/DinnerList.js';
import SearchValue from '../components/SearchValue.js';

class DinnerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dinnerRecipes: []
        };
      }
    
      performSearch = (searchValue) => {
        const dinnerRecipesUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=a81919ae&app_key=59b7d664460d80528e52d60e25858ed9&mealType=Dinner&imageSize=REGULAR`
            fetch(dinnerRecipesUrl)
            .then(response => response.json())
            .then((data) => this.setDinnerRecipesInState(data))
        }
    
        setDinnerRecipesInState = (data) => {
          this.setState({
              dinnerRecipes: data
          }, 
          );
      }
    
      render() {
        return (
          <div>
            <h1>the hungry girl.</h1>
            <h2>RECIPE FINDER</h2>
            <h3>DINNER RECIPES</h3>
            <SearchValue performSearch={this.performSearch}/>
            <DinnerList dinnerRecipes={this.state.dinnerRecipes}/>
          </div>
        );
      }
    }

export default DinnerContainer;
