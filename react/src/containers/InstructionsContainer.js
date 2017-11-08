import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      supplies: null,
      directions: null,
      activity: null
    }
    this.setSelectedStep = this.setSelectedStep.bind(this);
    this.fetchMethod = this.fetchMethod.bind(this);
  }

  setSelectedStep(id) {
    this.setState({
      id: id
    })
  }

  fetchMethod() {
    fetch('api/v1/favorite_things.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        supplies: body.supplies,
        directions: body.directions,
        activity: body.activity
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }



  render() {
    let items = null;
    let steps = null;

    if (this.state.supplies !== null) {
      items = this.state.supplies.map(supply => {
        return(
          <ItemTile
            item={supply.item}
            key={supply.id}
            id={supply.id}
          />
        )
      })
    }

    if (this.state.directions !== null) {
      steps = this.state.directions.map(direction => {
        let className;
        if (direction.id === this.state.id) {
          className = "selected";
        }

        return(
          <StepTile
            step={direction.step}
            key={direction.id}
            id={direction.id}
            setSelectedStep={this.setSelectedStep}
            className={className}
          />
        )
      })

    }

    return(
      <div>
        <h1>How To {this.state.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton fetchMethod={this.fetchMethod} />
      </div>
    )
  }
}

export default InstructionsContainer
;
