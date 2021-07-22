import React from 'react';

const Form = (props) => {
    const thisId = props.id;
    const thisClass = props.className;
    const thisType = props.type;
    const thisLabel = props.children;
    const thisPlaceholder = props.placeholder;
    const ThisText = props.textContent;
    const thisValue = props.value;

    return (
      <form id={thisId}>
          {thisLabel}
          <input type={thisType} className={thisClass} placeholder={thisPlaceholder} />
          <textarea className={thisClass}>{ThisText}</textarea>
          <input type="submit" className="submit" value={thisValue} />
      </form>
    );

}

export default Form;