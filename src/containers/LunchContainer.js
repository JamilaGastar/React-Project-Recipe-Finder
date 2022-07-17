import React from 'react';
import LunchList from '../components/LunchList';

class LunchContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lunchRecipes: []
        };
      }
    
      componentDidMount() {
        const lunchRecipesUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=lunch&app_id=a81919ae&app_key=be49d2601919ceeda4a620dde73a2b45&imageSize=REGULAR"
            fetch(lunchRecipesUrl)
            .then(response => response.json())
            .then((data) => this.setLunchRecipesInState(data))
        }
    
        setLunchRecipesInState = (data) => {
          this.setState({
              lunchRecipes: data
          }, 
          () => console.log(this.state.lunchRecipes.hits)
          );
      }
    
      render() {
        return (
          <div>
            <h1>the hungry girl.</h1>
                <h2>RECIPE FINDER</h2>
                    <h3>LUNCH RECIPES</h3>
                    <LunchList lunchRecipes={this.state.lunchRecipes}/>
          </div>
        );
      }
}


export default LunchContainer;
