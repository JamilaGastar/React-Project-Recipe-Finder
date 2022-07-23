import React from 'react';
import LunchList from '../components/LunchList';
import SearchValue from '../components/SearchValue';

class LunchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lunchRecipes: []
        };
      }
    
      performSearch = (searchValue) => {
        const lunchRecipesUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=a81919ae&app_key=59b7d664460d80528e52d60e25858ed9&mealType=Lunch&imageSize=REGULAR`
            fetch(lunchRecipesUrl)
            .then(response => response.json())
            .then((data) => this.setLunchRecipesInState(data))
        }
    
        setLunchRecipesInState = (data) => {
          this.setState({
              lunchRecipes: data
          }, 
          );
      }
    
      render() {
        return (
          <div>
            <h1>the hungry girl.</h1>
            <h2>RECIPE FINDER</h2>
            <h3>LUNCH RECIPES</h3>
            <SearchValue performSearch={this.performSearch}/>
            <LunchList lunchRecipes={this.state.lunchRecipes}/>
          </div>
        );
      }
}


export default LunchContainer;
