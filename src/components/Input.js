import React from 'react';

const Input = (props) => {
    const thisId = props.id;
    const thisClass = props.className; 

    var thisDisplayChange = props.displayChange;

    var thisType = props.type;
    var thisMin = props.min;
    var thisMax = props.max;
    var thisValue = props.value;
    var thisDefaultValue = props.defaultValue;
    var thisStep = props.step;

    return (
      <input id={thisId} className={thisClass} type={thisType} min={thisMin} max={thisMax} value={thisValue} step={thisStep} onChange={thisDisplayChange} defaultValue={thisDefaultValue} />
    );

}

export default Input;