import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

import Form from './../components/Form';
import { languages } from './../languages.js';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc, getDoc, getDocs, query, limit } from "firebase/firestore";
import { firebaseConfig, setUsers, addUsers, addComments, addOpinions, getPseudos, getNamesOfOpinions,  getOpinions, getLastIndex, increaseIndex } from "./../api/config";

const FormComment = (props) => {

    var language = languages.fr;

    const [value, setValue] = useState("");
    const [msg, setMsg] = useState(false);
    const [msgContent, setMsgContent] = useState("");
    const [msgComment, setMsgComment] = useState(false);
    const [msgContentComment, setMsgContentComment] = useState("");
    const [msgColor, setMsgColor] = useState("");
    
    let messages = {
        comment_succes: "Commentaire posté",
        comment_fail: "Avis entre 3 et 90 caractères"
    };

    const commentRef = useRef(null);
    const submitComment = useRef(null);

    const [userData] = useState({name: null, comment: null});

    useEffect(() => {
        submitComment.current.addEventListener('click', processComment);
        return submitComment.current.removeEventListener('click', processComment);
    }, []);

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

        userData.comment = commentRef.current.value;

        let app = initializeApp(firebaseConfig);
        let db = getFirestore(app);

        let pseudos = getPseudos(db);

        let commentToArray = commentRef.current.value.split("");
        
        if (commentToArray.length > 2 && commentToArray.length < 135) {
            pseudos.then((elmt) => {
                return; 
            }).then((elmt) => {
                addComments(db, userData).then(() => {
                    displayMsg(`${messages.comment_succes} ${"\u2714"}`);
                    setMsgColor(() => "lightgreen");
                    getDocs(collection(db, "comments-pipingdata.app"));
                }).catch((e) => {
                    console.log("error!", e);
                });
            })
        }   
        if (commentRef.current.value.length < 2 || commentRef.current.value.length > 91) {
            displayMsg(`${messages.comment_fail} ${"\u24D8"}`);
            setMsgColor(() => "orange");
        } 

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
        <div style={{ position: "relative", marginBottom: "5%" }}>
            <form onSubmit={processComment} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }} id={thisId}>
                <label style={{ padding: "15px 0", backgroundColor: "gray", textAlign: "center", borderRadius: "15px 15px 0 0", color: "white", fontSize: "14px", fontWeight: "bold" }} id="opinion">{props.labelComment}</label>
                <textarea ref={commentRef} className={"Text_comment"}>{ThisText}</textarea>
                <input ref={submitComment} type="submit" className="Submit_comment" value={props.send} />
            </form>
            
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

export default FormComment;