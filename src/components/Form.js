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
      <form onSubmit={props.onSubmit} id={thisId}>
          {thisLabel}
          <input ref={props.mail || props.name} type={thisType} className={thisClass} placeholder={thisPlaceholder} />
          <textarea ref={props.commentRef || props.opinionRef} className={thisClass}>{ThisText}</textarea>
          <input ref={props.submitComment || props.submitOpinion} type="submit" className="submit" value={thisValue} />
      </form>
    );

}

export default Form;