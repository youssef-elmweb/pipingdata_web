import React from 'react';

const Span = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisContainer = props.container;
    var thisDisplay = props.display;

    return (
        <span id={thisId} className={thisClass} onClick={thisDisplay}>{thisContainer}</span>  
    );
}

export default Span;