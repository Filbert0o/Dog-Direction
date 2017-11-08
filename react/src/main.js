import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import InstructionsContainer from './containers/InstructionsContainer';


// fetch(`http://localhost:4567/api/v1/favorite_things.json`)
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       let errorMessage = `${response.status} (${response.statusText})`,
//         error = new Error(errorMessage);
//       throw(error);
//     }
//   })
//   .then(response => response.text())
//   .then(body => {
//     let bodyParsed = JSON.parse(body);
//     console.log(bodyParsed);
//     ReactDOM.render(
//       <InstructionsContainer data={bodyParsed}/>,
//       document.getElementById('app')
//     );
//
//   })
//   .catch(error => console.error(`Error in fetch: ${error.message}`))

ReactDOM.render(
  <InstructionsContainer />,
  document.getElementById('app')
);
