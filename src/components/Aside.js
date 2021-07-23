import React from 'react';

const Aside = (props) => {
    const thisId = props.id;
    const thisClass = props.class;
    const thisChilds = props.children;

    return (

        <aside id={thisId} className={thisClass}>
            {thisChilds} 
        </aside>

    );

}

export default Aside;
