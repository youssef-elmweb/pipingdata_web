import React from 'react';

const Link = (props) => {
    const thisHref = props.href;
    const thisClass = props.className;
    const thisTitle = props.title;
    const thisContainer = props.container;
    const thisChilds = props.children;

    return (
        <a href={thisHref} className={thisClass} title={thisTitle}>{thisContainer || thisChilds}</a> 
    );

}

export default Link;