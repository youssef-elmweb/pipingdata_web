import React from 'react';

const FormNewsLetter = (props) => {

    const thisId = props.id;
    const thisClass = props.className;
    const thisType = props.type;
    const thisLabel = props.children;
    const thisPlaceholder = props.placeholder;
    const ThisText = props.textContent;
    const thisValue = props.value;

    return (
        <form style={{ width: "100%" }}>
            <div className="Bloc_title_beta" style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
                <label><h3 className="Title_beta">S'nscrire à la newsletter et au programme Bêta</h3></label>
            </div>

            <div style={{ display: "flex", width: "100%", padding: "2% 0", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#e74c3c", borderRadius: "7.5px" }}>
                <input style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", borderRadius: "5px" }} type={"text"} placeholder={"jos@gmail.com"} />
                <input className="Submit_beta" type="submit" value={thisValue} />
            </div>
        </form>
    );

}

export default FormNewsLetter;