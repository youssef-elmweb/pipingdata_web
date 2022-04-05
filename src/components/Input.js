import React from 'react';

const Input = (props) => {
    const thisId = props.id;
    const thisClass = props.className; 
    const thisName = props.name;

    var thisDisplayChange = props.displayChange;

    var thisType = props.type;
    var thisMin = props.min;
    var thisMax = props.max;
    var thisValue = props.value;
    var thisDefaultValue = props.defaultValue;
    var thisStep = props.step;
    var thisChecked = props.checked;

    return (
      <input style={props.style} id={thisId} className={thisClass} type={thisType} name={thisName} min={thisMin} max={thisMax} value={thisValue} step={thisStep} checked={thisChecked} onChange={thisDisplayChange} defaultValue={thisDefaultValue} />
    );

}

export default Input;