import React from 'react';

const Aside = (props) => {
    const thisId = props.id;
    const thisClass = props.class;
    const thisChilds = props.children;

    return (

        <aside style={props.style} id={thisId} className={thisClass}>
            {thisChilds} 
        </aside>

    );

}

export default Aside;
