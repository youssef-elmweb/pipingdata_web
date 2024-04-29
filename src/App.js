import './App.css';
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { FacebookShare, FacebookCount, LinkedinShare, EmailShare, WhatsappShare } from 'react-share-kit';
import Aside from './components/Aside';
import Button from './components/Button';
import Form from './components/Form';
import Img from './components/Img';
import Link from './components/Link';
import Section from './components/Section';
import Sectionsmart from './components/Sectionsmart';
import FormNewsLetter from './components/FormNewsLetter';
import FormComment from './components/FormComment';
import FormOpinion from './components/FormOpinion';
import Span from './components/Span';
import Title from './components/Title';
import EditableBar from './components/EditableBar';
import { languages } from './languages.js';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, orderBy, addDoc, query, limit } from "firebase/firestore";
import { firebaseConfig, setUsers, getUsers, getComments, getLastIndex, increaseIndex } from "./api/config";

const admin = {
    delete: "admin-delete",
    edit: "admin-edit",
    update: "admin-update",
    close: "admin-close"
};

const user = {
    delete: "user-delete",
    edit: "user-edit",
    update: "user-update",
    close: "user-close"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const displayTheme = (e) => {
    e.stopPropagation(); 

    var buttonTheme = document.getElementById("buttonTheme");
    var fleche = document.getElementsByClassName("fleche_theme")[0];

    buttonTheme.style.transitionProperty = "left, background-color, transform";
    document.body.style.transitionDuration = "2s";
    document.body.style.transitionDelay = "0.5s";
    buttonTheme.style.transitionDuration = "0.35s";
    buttonTheme.style.transitionDelay = "0.2s";
    fleche.style.transitionDuration = "1.5s";
    fleche.style.transitionDelay = "0.25s";

    if (buttonTheme.offsetLeft === 0) {

        buttonTheme.style.left = "48%";
            setTimeout(() => {
            buttonTheme.parentElement.style.backgroundColor = "deepskyblue";
            fleche.style.transform = "rotate(180deg)";
            document.body.style.backgroundColor = "rgb(4, 113, 221)";
            } ,300);

        } else {

            buttonTheme.style.left = "0%";
            setTimeout(() => { 
            buttonTheme.parentElement.style.backgroundColor = "steelblue";
            fleche.style.transform = "rotate(0deg)";
            document.body.style.backgroundColor = "white";
            }, 300);

        }
}

const displayLanguage = (e) => {
    e.stopPropagation();

  var buttonLanguage = document.getElementById("buttonLanguage");
  var fleche = document.getElementsByClassName("fleche_langage")[0];

  var badgeTrust = document.getElementById("badge_trust");

  var publish = document.getElementById("form_comment"); 
  var ButtonGoogleStore = document.getElementById("google"); 
  var ButtonAppleStore = document.getElementById("apple"); 

      buttonLanguage.style.transitionProperty = "left, rotate";
      buttonLanguage.style.transitionDuration = "0.5s";
      buttonLanguage.style.transitionDelay = "0.5s";
      fleche.style.transitionDuration = "1.5s";
      fleche.style.transitionDelay = "0.25s";

          if (buttonLanguage.offsetLeft === 0) {
            buttonLanguage.style.left = "48%";
              setTimeout(() => {
                fleche.style.transform = "rotate(180deg)";
                badgeTrust.setAttribute("src", "assets/badge-confiance-en.png");

                ButtonGoogleStore.setAttribute("src", "assets/badge-google-en.png");
                ButtonAppleStore.setAttribute("src", "assets/badge-apple-en.png");
              } ,700);

          } else {
            buttonLanguage.style.left = "0%";
              setTimeout(() => { 
                fleche.style.transform = "rotate(0deg)";
                badgeTrust.setAttribute("src", "assets/badge-confiance-fr.png");

                ButtonGoogleStore.setAttribute("src", "assets/badge-google-fr.png");
                ButtonAppleStore.setAttribute("src", "assets/badge-apple-fr.png");

              }, 700);
            }
} 

const LINKS_APP =    <Section key={`play-stores`} id="play-stores" className="play_stores">
                        <Link key={`app-link-google`} id="App-link-google" href="https://play.google.com/store/apps/details?id=com.production.pipingdata&hl=fr&gl=US" className="App_link_google">
                            <Img 
                                id="google"  
                                className="google"
                                src="assets/badge-google-fr.png"  
                                alt="google"
                            />
                        </Link>

                        <Link key={`app-link-apple`} id="App-link-apple" href="https://apps.apple.com/fr/app/pipingdata/id6477729206" className="App_link_apple">
                            <Img   
                                id="apple"  
                                className="apple" 
                                src="assets/badge-apple-fr.png"
                                alt="apple"
                            />
                        </Link>
                    </Section>

function App() {

    const queryComments = query(collection(db, "pipingdata/comments/discussion"), orderBy("id_discussion", "desc"));
    
    const queryOpinions = getDocs(collection(db, "opinions-pipingdata.app"));

    const [currentLanguage, setCurrentLanguage] = useState("fr"); 
    var language = languages[currentLanguage]; // default language

    const [comment, setComment] = useState(useMemo(() => [])); 
    const [commentList, setCommentList] = useState(useMemo(() => []));
    const [commentId, setCommentId] = useState(useMemo(() => [])); 
    const [commentUser, setCommentUser] = useState('');
    const [commentAdmin, setCommentAdmin] = useState('');

    const [opinion, setOpinion] = useState(null); 
    const [opinionUser, setOpinionUser] = useState('');
    const [opinionAdmin, setOpinionAdmin] = useState('');

    const comments = useMemo(() => []);
    const commentsList = useMemo(() => []);
    const commentsId = useMemo(() => []);
    let commentsCollection = useMemo(() => []);

    const opinions = [];
    let opinionsCollection = [];

    useEffect(() => {        
        let lastIndex, index;
        const querySnapshot = getDocs(queryComments);

        querySnapshot.then((doc) => {
            doc.docs.map((e) => { comments.push(e.data()); setComment(comments); console.log(e.id); index = e.data().id_discussion; lastIndex = e._key.path.segments[e._key.path.segments.length-1]; });

            const queryCommentsList = getDocs(collection(db, `pipingdata/comments/discussion/${lastIndex}/discussion_${index}`));

            queryCommentsList.then((doc) => {
                doc.docs.map((e) => { commentsList.push(e.data()); });
                setCommentList(commentsList);
            })

        });
        /*const querySnapshot = getDocs(queryComments);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });*/
    }, []);

    useEffect(() => {     
        const querySnapshot = getDocs(queryComments);

        querySnapshot.then((doc) => {
            doc.docs.map((e) => { commentsId.push(e.id); });
            setCommentId(commentsId);
        });
    }, []);

    if (comment == null) {
        commentsCollection = "Loading...";
    }   else if (comment.length < 1) {
            commentsCollection = language.no_comment;
        }   else {
                for (let i = 0; i < comment.length; i++) {
                    commentsCollection[i]   =   <div key={`bloc_comment_${i}`}>
                                                    <div key={`comment_${i}`} style={{ margin: "10px 0 25px" }}>
                                                        <div key={`bloc_header_comment_${i}`} style={{ padding: "5px 7.5px", display: "inline-flex", borderRadius: "10px" }}>
                                                            <small key={`header_comment_${i}`}><strong style={{ color: "blue" }}>{ `${comment[i].name}` }</strong><span style={{ fontSize: "11px", fontWeight: "bold", color: "maroon" }}>{ ` ${comment[i].date}` }</span></small>
                                                        </div>    

                                                        <textarea key={`body_comment_${i}`} onChange={e => setCommentUser(e.target.value)} defaultValue={comment[i].comment} disabled={(comment[i].archived != true ? false : true)} style={{ margin: "5px 0", padding: "7.5px", display: "flex", border: (comment[i].archived != true ? "0.5px solid silver" : "none"), borderRadius: "5px", color: "black", backgroundColor: (comment[i].archived != true ? false : "transparent") }} id="comment" name="comment" rows="3" cols="25">
                                                        </textarea>

                                                        {
                                                            (comment[i].archived != true ? 
                                                                <EditableBar key={`editable_bar_user${i}`} i={i} idUserDelete={user.delete} idUserEdit={user.edit} idUserUpdate={user.update} idUserClose={user.close} />
                                                            : false)
                                                        }
                                                    </div>

                                                    <div key={`comment_admin_${i}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>{/* alignItems: "flex-end" for mobile */}
                                                        <div key={`bloc_comment_admin_${i}`} style={{ display: "inline-flex", flexDirection: "column" }}>
                                                            <div key={`bloc_header_comment_admin_${i}`} style={{ padding: "5px 7.5px", display: "inline-flex", borderRadius: "10px" }}>
                                                                <small key={`header_comment_admin_${i}`}><strong style={{ color: "forestgreen" }}>{ "Admin" }</strong><span style={{ fontSize: "11px", fontWeight: "bold", color: "maroon" }}>{ ` ${comment[i].date}` }</span></small>
                                                            </div>     

                                                            <textarea key={`body_comment_admin_${i}`} onChange={e => setCommentAdmin(e.target.value)} defaultValue={comment[i].comment} disabled={(comment[i].archived != true ? false : true)} style={{ margin: "5px 0", padding: "7.5px", display: "flex", border: (comment[i].archived != true ? "0.5px solid silver" : "none"), borderRadius: "5px", color: "black", backgroundColor: (comment[i].archived != true ? false : "transparent") }} id="comment" name="comment" rows="3" cols="25">
                                                            </textarea>

                                                            {
                                                                (comment[i].archived != true ? 
                                                                    <EditableBar key={`editable_bar_admin${i}`} i={i} idAdminDelete={admin.delete} idAdminEdit={admin.edit} idAdminUpdate={admin.update} idAdminClose={admin.close} />
                                                                : false)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                }
            }




    useEffect(() => {        
        queryOpinions.then((doc) => {
            doc.docs.map((e) => { opinions.push(e.data()); });
            setOpinion(opinions);
        });
    }, []);


    if (opinion == null) {
        opinionsCollection = "Chargement...";
    }   else if (opinion.length < 1) {
            opinionsCollection = language.no_opinion;
        }   else {
                for (let i = 0; i < opinion.length; i++) {
                    opinionsCollection[i]   =   <div>
                                                    <div key={`opinion_${i}`} style={{ margin: "10px 0 25px" }}>
                                                        <div key={`bloc_header_opinion_${i}`} style={{ padding: "5px 7.5px", display: "inline-flex", borderRadius: "10px" }}>
                                                            <small key={`header_opinion_${i}`}><strong style={{ color: "blue" }}>{ `${opinion[i].name}` }</strong><span style={{ fontSize: "11px", fontWeight: "bold", color: "maroon" }}>{ ` ${opinion[i].date}` }</span></small>
                                                        </div>    

                                                        <p key={`body_opinion_user_${i}`} id={`body_opinion_user_${i}`} style={{ margin: "5px 0", padding: "7.5px", display: "flex", color: "black" }}>{opinion[i].opinion}</p>
                                                    </div>

                                                    <div key={`opinion_admin_${i}`} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>{/* alignItems: "flex-end" for mobile */}
                                                        <div key={`bloc_opinion_admin_${i}`} style={{ display: "inline-flex", flexDirection: "column" }}>
                                                            <div key={`bloc_header_opinion_admin_${i}`} style={{ padding: "5px 7.5px", display: "inline-flex", borderRadius: "10px" }}>
                                                                <small key={`header_opinion_admin_${i}`}><strong style={{ color: "forestgreen" }}>{ "Admin" }</strong><span style={{ fontSize: "11px", fontWeight: "bold", color: "maroon" }}>{ ` ${opinion[i].date}` }</span></small>
                                                            </div>     

                                                            <p key={`body_opinion_admin_${i}`} id={`body_opinion_admin_${i}`} style={{ margin: "5px 0", padding: "7.5px", display: "flex", color: "black" }}>{opinion[i].opinion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                }
            }
            

    var tabElbowsButtons = ["elbow", "elbow-double", "elbow-double-oriented", "elbow-slice"];

    const [showRgpd, setShowRgpd] = useState(false);

    return (

        (showRgpd == false ?
            <Section id="app" className="App">
                <header className="App_header">
                    <Section key={`logo`} className="App_logo">
                        <Link href="" className="App_link_logo">
                            <Img 
                                id="logo"                           
                                className="Logo"
                                src="assets/logo-web.png"
                                alt="piping-datas"
                            />
                        </Link>
                    </Section>  
                            
                    <Title
                        key={`ext-app`}
                        className="Ext_app"
                        container="PipingData.app"
                    /> 

                    <Section key={`app-link`} className="App_link">
                        <Section key={`links`} className="link" style={{ width: "125px", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <WhatsappShare
                                key={"whatsapp"}
                                windowWidth={"600px"}
                                windowHeight={"500px"}
                                size={"30px"}
                                round={true}
                                url={'https://play.google.com/store/apps/details?id=com.production.pipingdata&gl=FR'}
                                title={'PipingData'}
                                separator=": "
                            />

                            <EmailShare
                                key={"email-share"}
                                windowWidth={"600px"}
                                windowHeight={"500px"}
                                size={"30px"}
                                round={true}
                                subject={'PipingData'}
                                body={`Découvrez l'application PipingData pour le domaine de la tuyauterie industrielle: ${"\n\n\n"}`}
                                url={'https://play.google.com/store/apps/details?id=com.production.pipingdata&gl=FR'}
                            />

                            <LinkedinShare 
                                key={"linkedin"}
                                windowWidth={"600px"}
                                windowHeight={"500px"}
                                size={"30px"}
                                round={true}
                                url={'https://www.linkedin.com/in/youssef-el-mokhtari/'} 
                            />

                            <FacebookShare key={"facebook"} windowWidth={"600px"} windowHeight={"500px"} url={"https://www.facebook.com/profile.php?id=61558354162664"} size={"30px"} round={true}> 
                                <FacebookCount url={"https://www.facebook.com/profile.php?id=61558354162664"} appId='your-app-id' appSecret='your-app-secret' />
                                {shareCount => <span className="wrapper">{shareCount}</span>}
                            </FacebookShare>
                        </Section>

                        <Link key={`app-link-logo`} id="App_link_login" href="" className="App_link_login">
                            <Img 
                                style={{ maxWidth: "1OO%" }}
                                id="login"  
                                className="login"
                                src="assets/login.png"  
                                alt="login"
                            />
                        </Link>

                        <Section key={`app-setting-fast`} className="App_setting_fast">
                            <Section key={`theme`} id="theme" className="theme">                                           
                                <Span id="light" className="light" container="🌤" />
                                <Span id="dark" className="dark" container="&#127761;" />
                                    <Button id="buttonTheme" className="buttonTheme" value="theme" display={displayTheme}>
                                        <Span id="fleche" className="fleche_theme" container="&#10148;" />
                                    </Button>
                            </Section>

                            <Section key={`language`} id="language" className="language">
                                <Span id="french" className="french" container="🇫🇷" indice="fr" />
                                <Span id="english" className="english" container="🇬🇧" indice="en" />
                                    <Button id="buttonLanguage" className="buttonLanguage" value="language" display={(e) => { setCurrentLanguage((currentLanguage == "fr" ? "en" : "fr")); displayLanguage(e); } }>
                                        <Span id="fleche" className="fleche_langage" container="&#10148;" />
                                    </Button>
                            </Section>
                        </Section>
                    </Section>           
                </header>

                <Section key={`main`} id="main" className="App_main">
                    <Aside key={`contain-bloc-trust`} id="contain-bloc-trust">
                        <Section key={`bloc-msg-for-smart`} id="bloc-msg-for-smart">
                            <p key={`for-smart-1`} className="Msg_for_smart">{language.tryOnline}<span style={{ fontSize: "11px", color: "forestgreen" }}>{language.optimal_desk}</span></p>
                            <p key={`for-smart-2`} className="Msg_for_smart">{language.follow_youtube}<Span style={{ borderRadius: "15px" }}><Link className="Link_youtube" href="https://www.youtube.com/channel/UCkQUv_60E5QB1sjDRLYTbbQ" target="_blank" container="youtube" /></Span></p>
                        </Section>
                        
                        <Span  
                            key={`version`}
                            id="version"
                            className="Version" 
                            container={language.text_hook}
                        />

                        {LINKS_APP}
                    </Aside>

                    <Aside key={`bloc-smart-vector`}>
                        <Sectionsmart trialVersion={language.trial_version} textTrialVersion={language.text_trial_version} back={language.back} className="Smart_vector" values={tabElbowsButtons} />
                    </Aside>
                </Section>  

                <Aside key={`contain-bloc-trust-list`} id="contain-bloc-list">
                    <Section id={"bloc-trust-list"}>
                        <Section key={`trust-list`} style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                            <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "18px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                                <ul id="list-functions" style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent" }}>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>{language.simple_elbow}</p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>{language.double_elbow}</p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>{language.double_elbow_oriented}</p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>{language.slices_elbow}</p></li>
                                </ul>
                            </article>
                        </Section>

                        <Section key={`bloc-trust-badge`} key={`bloc-trust-badge`} id="bloc-trust-badge">
                            <Section style={{ display: "flex", width: "150px", justifyContent: "flex-end", alignItems: "center" }}>
                                <Img 
                                    id="badge_trust"
                                    style={{ maxWidth: "100%" }}
                                    src="assets/badge-confiance-fr.png" 
                                    alt="badge-trust"
                                />
                            </Section>
                        </Section>

                        <Section key={`bloc-trust-youtube`} id="bloc-trust-youtube">
                            <Section style={{ display: "flex", width: "150px", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                                <Img 
                                    id="badge_trust"
                                    style={{ maxWidth: "100%" }}
                                    src="assets/youtube.png" 
                                    alt="badge-trust"
                                />
                            </Section>
                        </Section>
                    </Section>
                </Aside> 


                <Aside id="contain-bloc-principle">
                    <Section key={"bloc-principle"} id="bloc-principle">
                        <Section key={"bloc-text-principle"} id="bloc-text-principle">
                            <article id="text-principle">
                                <h2 style={{ color: "#3498db" }}>{language.why_talk_data_viz}</h2>

                                <p style={{ fontSize: "15px", lineHeight: "40px", fontFamily: "Orbitron", color: "white" }}>
                                    {language.text_data_viz}
                                </p>
                            </article>
                        </Section>

                        <Section key={"bloc-img-principle"} id="bloc-img-principle">
                            <Section id="img-principle">
                                <Img 
                                    style={{ maxWidth: "100%" }}
                                    src="assets/principle.jpg" 
                                    alt="badge-trust"
                                />
                            </Section>
                        </Section>
                    </Section>
                </Aside> 


                <Aside key={"contain-bloc-beta"} id="contain-bloc-beta">
                    <Section id="bloc-beta">
                        <Section key={"beta-registered"} id="beta-registered">
                            <FormNewsLetter value={language.signup} register_beta={language.register_beta} pipeFitter={language.pipefitter} boilerMaker={language.boilermaker} />
                        </Section>

                        <Section key={"beta-text"} id="beta-text">
                            <article>
                                <h2 key={"beta-text-title"} style={{ textAlign: "center" }}>Informations</h2>
                                
                                <p key={"beta-text-content"} style={{ fontSize: "18px", lineHeight: "40px", color: "black", textAlign: "center" }}>
                                    {language.text_informations}
                                </p>
                            </article>
                        </Section>
                    </Section>
                </Aside> 

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Section style={{ width: "75%", alignSelf: "center" }} key={"comment-form"} id="comment-form">
                        <FormComment labelComment={language.label_comment} send={language.send} />
                    </Section>

                    <Aside key={"comments-collection"} style={{ flex: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "25px 150px", borderTop: "0.5px solid black", backgroundColor: "#FFFFEF" }}>                    
                        <div style={{ flex: "50%" }}>
                            { commentsCollection }
                        </div>
                    </Aside>
                </div>


                <Aside key={"contain-bloc-opinion"} id="contain-bloc-opinion">
                    <Section id="bloc-opinion">
                        <Section key={"opinion-text"} id="opinion-text">
                            <article>
                                <h2 key={"opinion-title"} style={{ textAlign: "center", color: "white" }}>{language.participate}</h2>
                                
                                <p key={"opinion-msg"} style={{ fontSize: "18px", lineHeight: "40px", color: "white", textAlign: "center" }}>
                                    {language.text_participate}
                                </p>
                            </article>
                        </Section>

                        <Section key={"opinion-registered"} id="opinion-registered">
                            <FormOpinion labelComment={language.review} labelSubmit={language.publish} />
                        </Section>
                    </Section>
                </Aside>


                <Aside key={"opinions-collection"} style={{ flex: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "25px 150px", backgroundColor: "white" }}>                    
                    <div style={{ flex: "50%" }}>
                        { opinionsCollection }
                    </div>
                </Aside>


                <Aside key={"contain-bloc-footer"} style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Section id="bloc-footer">
                        <Section key={"bloc-logo-footer"} style={{ display: "flex", flex: "25%", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#252525" }}>
                            <Section className="App_logo_footer">
                                <Link href="#" className="App_link_logo_footer">
                                    <Img 
                                        id="logo"                           
                                        className="Logo_footer"
                                        src="assets/logo-web.png"
                                        alt="piping-datas"
                                    />
                                </Link>
                            </Section>
                        </Section>
                        
                        <Section key={"contact-footer"} id="contact-footer">
                            <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "16px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                                <ul style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent" }}>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#127968;</Span><Span>{language.pipingdata_by}<Span style={{ textDecoration: "underline" }}><Link href="https://elm-web.fr" target="_blank" container="Elm-web.fr"/></Span></Span></p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#9742;</Span>+33761302846</p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#x1F4E7;</Span>contact.pipingdata@gmail.com</p></li>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#x1F512;</Span><Button id="rgpd" thisMargin={"0 1%"} thisPadding={"2.5% 0"} thisWidth={"30%"} thisFontSize={"13px"} className="Rgpd" thisColorButton={"#484848"} type="button" value="rgpd" display={(e) => { e.stopPropagation(); (!showRgpd ? setShowRgpd(true) : setShowRgpd(false)); } }>RGPD</Button></p></li>
                                </ul>
                            </article>
                        </Section>

                        <Section key={"bloc-list-ul-footer"} style={{ display: "flex", flex: "30%", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                            <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "16px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                                <ul id="list-ul-footer">
                                    <div style={{ lineHeight: "1" }}>
                                        <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><h4 style={{ marginLeft: "10px", fontSize: "calc(0.5vw+0.25em)", color: "white", textAlign: "left" }}>{language.other_app}</h4></li>
                                        
                                        <div style={{ lineHeight: "0.25" }}>
                                            <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "calc(0.5vw+0.5em)", color: "white", fontWeight: "bold" }}></Span><p style={{ marginLeft: "10px", fontSize: "calc(0.5vw+0.25em)", color: "white", textAlign: "left" }}>ElbowData</p></li>
                                            <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "calc(0.5vw+0.5em)", color: "white", fontWeight: "bold" }}>-</Span><Span style={{ fontSize: "calc(0.5vw+0.5em)", color: "white", fontWeight: "bold" }}></Span><p style={{ marginLeft: "10px", textDecoration: "underline", fontSize: "calc(0.5vw+0.25em)", color: "white", textAlign: "left" }}><Link href="https://play.google.com/store/apps/details?id=com.trigotube&gl=FR" target="_blank" container="Android"/></p></li>
                                            <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "calc(0.5vw+0.5em)", color: "white", fontWeight: "bold" }}>-</Span><Span style={{ fontSize: "calc(0.5vw+0.5em)", color: "white", fontWeight: "bold" }}></Span><p style={{ marginLeft: "10px", textDecoration: "underline", fontSize: "calc(0.5vw+0.25em)", color: "white", textAlign: "left" }}><Link href="https://apps.apple.com/fr/app/pipingdata/id6477729206" target="_blank" container="IOS"/></p></li>
                                        </div>
                                    </div>
                                </ul>
                            </article>
                        </Section>
                    </Section>
                </Aside>

                <Section key={"copyright"} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 0", backgroundColor: "white" }}><p style={{ display: "flex", justifyContent: "center", alignItems: "center", lineHeight: "calc(0.75vw+0.5em)", fontSize: "calc(0.75vw+0.5em)", color: "black" }}><Span style={{ padding: "0 5px", color: "black", lineHeight: "calc(2vw+1em)", fontSize: "calc(2vw+1em)", fontWeight: "bold" }}>©</Span>{language.copyright}</p></Section>
            </Section> 
            
            : 

                <Section key={"bloc-rgpd"} style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                    <Section style={{ width: "70%", height: "75vh", lineHeight: "35px", padding: "0 17.5px 10px 17.5px", display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center", alignItems: "center", textAlign: "center", border: "1px solid black", borderRadius: "10px" }}>
                        <article key={"article-rgpd"} style= {{ overflow: "scroll" }}>
                            <h2 key={"title-rgpd"} style={{ textAlign: "center", color: "black" }}>{language.confidenciality}</h2>
                            
                            <p key={"msg-rgpd"} style={{ fontSize: "14px", color: "black", textAlign: "center" }}>
                                {language.text_confidenciality}<Link id="" target="_blank" href="mailto:contact.pipingdata@gmail.com"><Span style={{ color: "blue", textDecoration: "underline" }}>contact.pipingdata@gmail.com</Span></Link><br />
                                {language.thank}
                            </p>
                        </article>
                        
                        <Button key={"submit-rgpd"} id="rgpd" className="Rgpd" type="button" value="rgpd" display={() => { document.body.style.backgroundColor = "white"; (showRgpd ? setShowRgpd(false) : setShowRgpd(true)) } }>Retour</Button>
                    </Section>
                </Section>)
    
    );

}

export default App;

