import React, { Component } from 'react'

class App extends Component {
  state = {
    recipes: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/recipes')
    .then(resp => resp.json())
    .then(data => this.setState({recipes: data}))
    .then(json => console.log(json))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        {this.state.recipes.map(recipe => 
        <div>
          <h1>{recipe.name}</h1>
          <h3>Rating: {recipe.rating} </h3>
          <h3>Time</h3>
          <p>{recipe.time}</p>
          <h3>Servings</h3>
          <p>{recipe.servings}</p>
          <h3>Ingredients</h3>
          <p>{recipe.ingredients}</p>
          <h3>Directions</h3>
          <p>{recipe.directions}</p>
        </div>
          )}
      </div>
    )
  }
}

export default App