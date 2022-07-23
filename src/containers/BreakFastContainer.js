import React from 'react';
import BreakfastList from '../components/BreakfastList';
import SearchValue from '../components/SearchValue';

class BreakFastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastRecipes: []
    };
  }

  performSearch= (searchValue) => {
    const breakfastRecipesUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=a81919ae&app_key=59b7d664460d80528e52d60e25858ed9&mealType=Breakfast&imageSize=REGULAR`
        fetch(breakfastRecipesUrl)
        .then(response => response.json())
        .then((data) => this.setBreakfastRecipesInState(data))
    }

    setBreakfastRecipesInState = (data) => {
      this.setState({
          breakfastRecipes: data
      }, 
      );
  }

  render() {
    return (
      <div>
        <h1>the hungry girl.</h1>
        <h2>RECIPE FINDER</h2>
        <h3>BREAKFAST RECIPES</h3>
        <SearchValue performSearch={this.performSearch}/>
        <BreakfastList breakfastRecipes={this.state.breakfastRecipes}/>
      </div>
    );
  }
}


export default BreakFastContainer;
