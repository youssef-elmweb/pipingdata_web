import React from 'react';

const Title = (props) => {
    const thisId = props.classId;
    const thisClass = props.className;
    const thisContainer = props.container;

    return (
        <h1  id={thisId} className={thisClass}>{thisContainer}</h1> 
    );

}

export default Title;