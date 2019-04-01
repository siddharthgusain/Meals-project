import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe,removeFromCalendar } from '../actions';

class App extends Component {

  
  render() {
    console.log(this.props);
    return (
      <div className="App">
       Hello world
      </div>
    );
  }
}

function mapStateToProps({ calendar,food }){
  const dayOrder=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
        ? food[calendar[day][meal]]
        : null
        return meals
      }, {})
    })),
  }
}


export default connect(
  mapStateToProps,
)(App);
