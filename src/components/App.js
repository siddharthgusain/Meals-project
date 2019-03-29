import React, { Component } from 'react';
import { connect } from 'react-redux';
import calendar from '../reducers';
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

function mapStateToProps(calender){
  const dayOrder=['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];

  return {
    calendar: dayOrder.map((day) => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal]
        ? calendar[day][meal]
        : null
        return meals
      }, {})
    })),
  }
}


export default connect(
  mapStateToProps,
)(App);
