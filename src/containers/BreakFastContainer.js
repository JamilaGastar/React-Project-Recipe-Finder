import React from 'react';
import BreakfastList from '../components/BreakfastList';

class BreakFastContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakfastRecipes: []
    };
  }

  componentDidMount() {
    const breakfastRecipesUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=breakfast&app_id=a81919ae&app_key=be49d2601919ceeda4a620dde73a2b45&imageSize=REGULAR"
        fetch(breakfastRecipesUrl)
        .then(response => response.json())
        .then((data) => this.setBreakfastRecipesInState(data))
    }

    setBreakfastRecipesInState = (data) => {
      this.setState({
          breakfastRecipes: data
      }, 
      () => console.log(this.state.breakfastRecipes.hits)
      );
  }

  render() {
    return (
      <div>
        <h1>the hungry girl.</h1>
            <h2>RECIPE FINDER</h2>
                <h3>BREAKFAST RECIPES</h3>
                <BreakfastList breakfastRecipes={this.state.breakfastRecipes}/>
      </div>
    );
  }
}


export default BreakFastContainer;
