import React from 'react';
import DinnerList from '../components/DinnerList.js';

class DinnerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          dinnerRecipes: []
        };
      }
    
      componentDidMount() {
        const dinnerRecipesUrl = "https://api.edamam.com/api/recipes/v2?type=public&q=dinner&app_id=a81919ae&app_key=be49d2601919ceeda4a620dde73a2b45&imageSize=REGULAR"
            fetch(dinnerRecipesUrl)
            .then(response => response.json())
            .then((data) => this.setDinnerRecipesInState(data))
        }
    
        setDinnerRecipesInState = (data) => {
          this.setState({
              dinnerRecipes: data
          }, 
          () => console.log(this.state.dinnerRecipes.hits)
          );
      }
    
      render() {
        return (
          <div>
            <h1>the hungry girl.</h1>
                <h2>RECIPE FINDER</h2>
                    <h3>DINNER RECIPES</h3>
                    <DinnerList dinnerRecipes={this.state.dinnerRecipes}/>
          </div>
        );
      }
    }

export default DinnerContainer;
