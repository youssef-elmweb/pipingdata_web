import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { firebaseConfig, setUsers, addUsers, addComments, getUsers, getComments, getLastIndex, increaseIndex } from "./../api/config";

const FormNewsLetter = (props) => {

    const [job, setJob] = useState("pipefitter");
    const [comment, setComment] = useState("");
    const [value, setValue] = useState("");
    const [msg, setMsg] = useState(false);
    const [msgContent, setMsgContent] = useState("");
    const [msgColor, setMsgColor] = useState("");
    
    let messages = {
        subscription_beta_succes: "Votre inscription à réussi",
        subscription_beta_exist: "Ce mail éxiste déjà",
        subscription_beta_fail: "Saisir un mail valide"
    };

    const mail = useRef(null);
    const jobRef = useRef(null);
    const commentRef = useRef(null);
    const submitBeta = useRef(null);
    //const submitComment = useRef(null);

    const userData = {mail: null, job: null, comment: null};

    useEffect(() => {
        submitBeta.current.addEventListener('click', processUser);
        return submitBeta.current.removeEventListener('click', processUser);
    }, []);

    const resetMail = () => {
        mail.current.value = "";
    };

    const displayMsg = (msg_content) => {
        setMsg(() => true);
        setMsgContent(() => msg_content);

        setTimeout(() => {
            setMsg(() => false);
            setMsgContent(() => "");
            setMsgColor(() => "");
        }, "5000");
    }
  
    const processUser = (e) => {
        e.preventDefault();
        e.stopPropagation();

        userData.mail = mail.current.value;
        userData.job = job;

        let app = initializeApp(firebaseConfig);
        let db = getFirestore(app);

        let users = getUsers(db);

        let mailToArray = mail.current.value.split("");
        let arobaseFinded = mailToArray.filter((elmt) => elmt == "@");

        let result;
        let countAfterArobse = mailToArray.filter((elmt, i) => { 
            
            if (mailToArray[i] == "@") { 
                if (mail.current.value[0] != "@") {
                    result = mail.current.value.substring(i+1).length > 2;
                }   else {
                        result = false;
                    }
            } 
        });

        if (arobaseFinded.length == 1 && mailToArray.length < 40 && mailToArray.length > 4 && result == true) {
            users.then((elmt) => {
                return elmt.includes(userData.mail);
            }).then((elmt) => {
                if (elmt != true) {
                    addUsers(db, userData).then(() => {
                        displayMsg(`${messages.subscription_beta_succes} ${"\u2714"}`);
                        setMsgColor(() => "green");
                    }).catch((e) => {
                        console.log("error!", e);
                    });
                } else {
                    displayMsg(`${messages.subscription_beta_exist} ${"\u24D8"}`);
                    setMsgColor(() => "red");
                }
            })
        }   else {
                displayMsg(`${messages.subscription_beta_fail} ${"\u24D8"}`);
                setMsgColor(() => "orange");
            }

            resetMail();
            setJob("pipefitter");
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
            <div style={{ padding: "0 30px 10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderWidth: "0.5px", borderStyle: "solid", borderColor: "black", borderRadius: "15px", backgroundColor: "white" }}>
                <form onSubmit={processUser} style={{ width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                        <label><h3 style={{ textAlign: "center" }}>{props.register_beta}</h3></label>
                    </div>

                    <div style={{ display: "flex", width: "100%", padding: "2% 0", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#e74c3c", borderRadius: "7.5px" }}>
                        <input ref={mail} id="mail" required="required" style={{ display: "flex", width: "50%", justifyContent: "center", alignItems: "center", borderRadius: "5px" }} type={"text"} placeholder={"yourmail@gmail.com"} />
                        <input ref={submitBeta} id="submit-beta" className="Submit_beta" type="submit" value={thisValue} />
                    </div>

                    <div style={{ display: "flex", width: "100%", flexDirection: "row", padding: "2% 0", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "white", borderRadius: "0 0 7.5px 7.5px" }}>                    
                        <div>
                            <input onChange={() => setJob("tuyauteur")} checked={(job == "pipefitter" ? true : false)} required="required" type="radio" name={"job"} value={job} id="pipefitter" />
                            
                            <label htmlFor="pipefitter">
                                {props.pipeFitter}
                            </label>
                        </div>

                        <div>
                            <input onChange={() => setJob("boilermaker")} checked={(job == "boilermaker" ? true : false)} required="required" type="radio" name={"job"} value={job} id="boilermaker" />
                            
                            <label htmlFor="boilermaker">
                                {props.boilerMaker}
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            
            { 
                (msg == true ?
                <p style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "13px" }}><span style={{ color: msgColor, fontWeight: "700" }}>{ msgContent }</span></p>
                : false)
            }
        </div>
    );

}

export default FormNewsLetter;

