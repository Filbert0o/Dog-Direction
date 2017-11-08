import React from 'react';

const FetchButton = props => {
  return(
    <button onClick={props.fetchMethod}>Get Favorite Thing</button>
  )
}

export default FetchButton;
