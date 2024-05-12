import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import Form from './../components/Form';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { firebaseConfig, setUsers, addUsers, addOpinions, getPseudos, getNamesOfOpinions,  getOpinions, getLastIndex, increaseIndex } from "./../api/config";

const FormOpinion= (props) => {

    const [value, setValue] = useState("");
    const [msg, setMsg] = useState(false);
    const [msgContent, setMsgContent] = useState("");
    const [msgOpinion, setMsgOpinion] = useState(false);
    const [msgContentOpinion, setMsgContentOpinion] = useState("");
    const [msgColor, setMsgColor] = useState("");
    
    let messages = {
        pseudo_succes: "Merci pour votre avis",
        pseudo_exist: "Ce pseudo à déjà posté",
        pseudo_fail: "Pseudo: 5 caractères requis",
        pseudo_fail_opinion: "Avis entre 3 et 90 caractères"
    };

    const name = useRef(null);
    const opinionRef = useRef(null);
    const submitOpinion = useRef(null);

    const [userData] = useState({name: null, opinion: null, opinion_admin: ""});

    useEffect(() => {
        submitOpinion.current.addEventListener('click', processOpinion);
        return submitOpinion.current.removeEventListener('click', processOpinion);
    }, []);

    const resetName = () => {
        name.current.value = "";
    };

    const resetOpinion = () => {
        opinionRef.current.value = "";
    };

    const displayMsg = (msg_content) => {
        setMsg(() => true);
        setMsgContent(() => msg_content);

        setMsgOpinion(() => true);
        setMsgContentOpinion(() => msg_content);

        setTimeout(() => {
            setMsg(() => false);
            setMsgContent(() => "");

            setMsgOpinion(() => false);
            setMsgContentOpinion(() => "");

            setMsgColor(() => "");
        }, "5000");
    }

    const processOpinion = (e) => {
        e.preventDefault();
        e.stopPropagation();

        userData.name = name.current.value;
        userData.opinion = opinionRef.current.value;

        let app = initializeApp(firebaseConfig);
        let db = getFirestore(app);

        let pseudos = getPseudos(db);

        let nameToArray = name.current.value.split("");
        let opinionToArray = opinionRef.current.value.split("");
        
        if (nameToArray.length < 40 && nameToArray.length > 4 && opinionToArray.length > 2 && opinionToArray.length < 135) {
            pseudos.then((elmt) => {
                return elmt.includes(userData.name); 
            }).then((elmt) => {
                if (elmt != true) {
                    addOpinions(db, userData).then(() => {
                        displayMsg(`${messages.pseudo_succes} ${"\u2714"}`);
                        setMsgColor(() => "lightgreen");
                        getDocs(collection(db, "opinions-pipingdata.app"));
                    }).catch((e) => {
                        console.log("error!", e);
                    });
                } else {
                    displayMsg(`${messages.pseudo_exist} ${"\u24D8"}`);
                    setMsgColor(() => "red");
                }
            })
        }   else {
                displayMsg(`${messages.pseudo_fail} ${"\u24D8"}`);
                setMsgColor(() => "orange");
            }

        if (opinionRef.current.value.length < 2 || opinionRef.current.value.length > 91) {
            displayMsg(`${messages.pseudo_fail_opinion} ${"\u24D8"}`);
            setMsgColor(() => "orange");
        } 

        resetName();
        resetOpinion();
    };

    const thisId = props.id;
    const thisClass = props.className;
    const thisType = props.type;
    const thisLabel = props.children;
    const thisPlaceholder = props.placeholder;
    const ThisText = props.textContent;
    const thisValue = props.value;

    return (
        <div style={{ position: "relative" }}>

            <Form
                name={name}
                opinionRef={opinionRef}
                submitOpinion={submitOpinion}
                onSubmit={processOpinion}
                id="form-opinion"
                className="Form_opinion"
                type="text"
                value={props.labelSubmit}
                placeholder="Pseudo" 
                    children={
                        <label style={{ backgroundColor: "#262626", textAlign: "center", borderRadius: "5px 5px 0 0", color: "white", fontWeight: "bold" }} id="opinion">{props.labelComment}</label>
                    }
            />
            
            { 
                (msg == true ?
                <p style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "13px" }}><span style={{ color: msgColor, fontWeight: "700" }}>{ msgContent }</span></p>
                : false)
            }

            {
                (msgOpinion == true ?
                <p style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "13px" }}><span style={{ color: msgColor, fontWeight: "700" }}>{ msgContentOpinion }</span></p>
                : false)
            }
        </div>
    );

}

export default FormOpinion;