import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import Form from './../components/Form';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { firebaseConfig, setUsers, addUsers, addComments, getUsers, getComments, getLastIndex, increaseIndex } from "./../api/config";

const FormNewsLetter = (props) => {

    const languages = { 
        'fr':   {'version': 'La data visualisation au service de la tuyauterie industrielle', 
        'comment': 'Publiez un Commentaire',
        'publish': 'Publiez'
        }, 

        'en':   {'version': 'Data visualization for industrial piping', 
        'comment': 'Publish one Comment',
        'publish': 'Publish'
        }
    }

    var language = languages.fr;

    const [job, setJob] = useState("pipefitter");
    const [value, setValue] = useState("");
    const [msg, setMsg] = useState(false);
    const [msgContent, setMsgContent] = useState("");
    const [msgComment, setMsgComment] = useState(false);
    const [msgContentComment, setMsgContentComment] = useState("");
    const [msgColor, setMsgColor] = useState("");
    
    let messages = {
        subscription_beta_succes: "Merci pour votre commentaire",
        subscription_beta_exist: "Ce mail éxiste déjà",
        subscription_beta_fail: "Saisir un mail valide",
        subscription_beta_fail_comment: "Entre 3 et 90 caractères"
    };

    const mail = useRef(null);
    const commentRef = useRef(null);
    const submitComment = useRef(null);

    const [userData] = useState({mail: null, comment: null});

    useEffect(() => {
        submitComment.current.addEventListener('click', processComment);
        return submitComment.current.removeEventListener('click', processComment);
    }, []);

    const resetMail = () => {
        mail.current.value = "";
    };

    const resetComment = () => {
        commentRef.current.value = "";
    };

    const displayMsg = (msg_content) => {
        setMsg(() => true);
        setMsgContent(() => msg_content);

        setMsgComment(() => true);
        setMsgContentComment(() => msg_content);

        setTimeout(() => {
            setMsg(() => false);
            setMsgContent(() => "");

            setMsgComment(() => false);
            setMsgContentComment(() => "");

            setMsgColor(() => "");
        }, "5000");
    }

    const processComment = (e) => {
        e.preventDefault();
        e.stopPropagation();

        userData.mail = mail.current.value;
        userData.comment = commentRef.current.value;

        let app = initializeApp(firebaseConfig);
        let db = getFirestore(app);

        let comments = getComments(db);

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

        if (arobaseFinded.length == 1 && mailToArray.length < 40 && mailToArray.length > 4 && result == true && commentRef.current.value.length > 2 && commentRef.current.value.length < 91) {
            comments.then((elmt) => {
                return elmt.includes(userData.mail);
            }).then((elmt) => {
                if (elmt != true) {
                    addComments(db, userData).then(() => {
                        displayMsg(`${messages.subscription_beta_succes} ${"\u2714"}`);
                        setMsgColor(() => "lightgreen");
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

        if (commentRef.current.value.length < 2 || commentRef.current.value.length > 91) {
            displayMsg(`${messages.subscription_beta_fail_comment} ${"\u24D8"}`);
            setMsgColor(() => "orange");
        } 

        resetMail();
        resetComment();
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
                mail={mail}
                commentRef={commentRef}
                submitComment={submitComment}
                onSubmit={processComment}
                id="form_comment"
                className="Form_comment"
                type="email"
                value={language.publish}
                placeholder="mail@you.com" 
                    children={
                        <label id="comment">{language.comment}</label>
                    }
            />
            
            { 
                (msg == true ?
                <p style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "13px" }}><span style={{ color: msgColor, fontWeight: "700" }}>{ msgContent }</span></p>
                : false)
            }

            {
                (msgComment == true ?
                <p style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", fontSize: "13px" }}><span style={{ color: msgColor, fontWeight: "700" }}>{ msgContentComment }</span></p>
                : false)
            }
        </div>
    );

}

export default FormNewsLetter;