import React from 'react';

const Span = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisContainer = props.container;
    var thisDisplay = props.display;

    const makeValue = () => {
        return props.value;
    }

    return (
        <span style={props.style} value={props.value} id={thisId} className={thisClass} onClick={thisDisplay}>{makeValue() || thisContainer || props.children}</span>  
    );

}

export default Span;