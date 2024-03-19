import './App.css';
import React, { useState } from 'react';
import Aside from './components/Aside';
import Button from './components/Button';
import Form from './components/Form';
import Img from './components/Img';
import Link from './components/Link';
import Section from './components/Section';
import Sectionsmart from './components/Sectionsmart';
import FormNewsLetter from './components/FormNewsLetter';
import Span from './components/Span';
import Title from './components/Title';
import './controller/display_icones.js';

const languages = { // voir state de button langage et modifier dynamiquement à partir de l'indice basé sur id en/fr
                    // n'avoir qu'un objet dans l'objet languages.
    'fr':   {'version': 'La data visualisation au service de la tuyauterie industrielle', 
             'comment': 'Publiez un Commentaire',
             'publish': 'Publiez'
            }, 

    'en':   {'version': 'Data visualization for industrial piping', 
             'comment': 'Publish one Comment',
             'publish': 'Publish'
            }
}

var language = languages.fr; // default language

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
  var version = document.getElementById("version"); 
  var comment = document.getElementById("comment");
  var publish = document.getElementById("form_comment"); 
  var ButtonGoogleStore = document.getElementById("google"); 
  var ButtonAppleStore = document.getElementById("apple"); 

      buttonLanguage.style.transitionProperty = "left, rotate";
      buttonLanguage.style.transitionDuration = "0.5s";
      buttonLanguage.style.transitionDelay = "0.5s";
      fleche.style.transitionDuration = "1.5s";
      fleche.style.transitionDelay = "0.25s";

          if (buttonLanguage.offsetLeft === 0) {
            buttonLanguage.setAttribute("value", "fr");

            buttonLanguage.style.left = "48%";
              setTimeout(() => {
                version.textContent = languages.en.version; 
                comment.textContent = languages.en.comment; 
                publish.lastChild.value = languages.en.publish // bouton formulaire commentaire
                fleche.style.transform = "rotate(180deg)";
                //badgeTrust.style.transform = "rotate(180deg)";
                badgeTrust.setAttribute("src", "assets/badge-confiance-en.png");

                ButtonGoogleStore.setAttribute("src", "assets/badge-google-en.png");
                ButtonAppleStore.setAttribute("src", "assets/badge-apple-en.png");
              } ,700);

              language = languages.fr; 
              return language; 

          } else {
            buttonLanguage.setAttribute("value", "en");
          
            buttonLanguage.style.left = "0%";
              setTimeout(() => { 
                version.textContent = languages.fr.version;
                comment.textContent = languages.fr.comment;
                publish.lastChild.value = languages.fr.publish // bouton formulaire commentaire
                fleche.style.transform = "rotate(0deg)";
                //badgeTrust.style.transform = "rotate(0deg)";
                badgeTrust.setAttribute("src", "assets/badge-confiance-fr.png");

                ButtonGoogleStore.setAttribute("src", "assets/badge-google-fr.png");
                ButtonAppleStore.setAttribute("src", "assets/badge-apple-fr.png");

              }, 700);

              language = languages.en; 
              return language;
            }
} 

function App() {

var tabElbowsButtons = ["elbow", "elbow-double", "elbow-double-oriented", "elbow-slice"];

const [showRgpd, setShowRgpd] = useState(false);

  return (

    (showRgpd == false ?
        <Section id="app" className="App">
            <header className="App_header">
                <Section className="App_logo">
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
                    className="Ext_app"
                    container="PipingData.app"
                /> 

                <Section className="App_link">
                    <Link
                        href="https://elm-web.fr"
                        target="_blank"
                        rel="noopener"
                        className="link"
                        container="Elm-web.com"
                    />

                    <Link id="App_link_login" href="" className="App_link_login">
                        <Img 
                            style={{ maxWidth: "1OO%" }}
                            id="login"  
                            className="login"
                            src="assets/login.png"  
                            alt="login"
                        />
                    </Link>

                    <Section className="App_setting_fast">
                        <Section id="theme" className="theme">                                           
                            <Span id="light" className="light" container="🌤" />
                            <Span id="dark" className="dark" container="&#127761;" />
                                <Button id="buttonTheme" className="buttonTheme" value="theme" display={displayTheme}>
                                    <Span id="fleche" className="fleche_theme" container="&#10148;" />
                                </Button>
                        </Section>

                        <Section id="language" className="language">
                            <Span id="french" className="french" container="🇫🇷" indice="fr" />
                            <Span id="english" className="english" container="🇬🇧" indice="en" />
                                <Button id="buttonLanguage" className="buttonLanguage" value="language" display={displayLanguage}>
                                    <Span id="fleche" className="fleche_langage" container="&#10148;" />
                                </Button>
                        </Section>
                    </Section>
                </Section>           
            </header>

            <Section id="main" className="App_main">
                <Aside id="contain-bloc-trust">
                    <Section id="bloc-msg-for-smart">
                        <p className="Msg_for_smart">Essai en ligne optimisée pour ordinateur</p>
                        <p className="Msg_for_smart">pour les smarts regarder sur <Span style={{ borderRadius: "15px" }}><Link className="Link_youtube" href="" target="_blank" container="youtube" /></Span></p>
                    </Section>
                    
                    <Span  
                        id="version"
                        className="Version" 
                        container={language.version}
                    />

                    <Section id="play_stores" className="play_stores">
                        <Link id="App_link_google" href="https://play.google.com/store/apps/details?id=com.production.pipingdata&hl=fr&gl=US" className="App_link_google">
                            <Img 
                                id="google"  
                                className="google"
                                src="assets/badge-google-fr.png"  
                                alt="google"
                            />
                        </Link>

                        <Link id="App_link_apple" href="https://apps.apple.com/fr/app/pipingdata/id6477729206" className="App_link_apple">
                            <Img   
                                id="apple"  
                                className="apple" 
                                src="assets/badge-apple-fr.png"
                                alt="apple"
                            />
                        </Link>
                    </Section>
                </Aside>

                <Aside>
                    <Sectionsmart className="Smart_vector" values={tabElbowsButtons} />
                </Aside>
            </Section>  

            <Aside id="contain-bloc-list">
                <Section id={"bloc-trust-list"}>
                    <Section style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                        <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "18px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                            <ul id="list-functions" style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent" }}>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>Coude Simple</p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>Double Coude</p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>Double Coude Orienté</p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><Span style={{ fontSize: "26px", color: "green", fontWeight: "bold" }}>&#x2714;</Span><p style={{ marginLeft: "10px", fontSize: "18px", color: "black", textAlign: "left" }}>Coude en tranches</p></li>
                            </ul>
                        </article>
                    </Section>

                    <Section id="bloc-trust-badge">
                        <Section style={{ display: "flex", width: "150px", justifyContent: "flex-end", alignItems: "center" }}>
                            <Img 
                                id="badge_trust"
                                style={{ maxWidth: "100%" }}
                                src="assets/badge-confiance-fr.png" 
                                alt="badge-trust"
                            />
                        </Section>
                    </Section>

                    <Section id="bloc-trust-youtube">
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
                <Section id="bloc-principle">
                    <Section id="bloc-text-principle">
                        <article id="text-principle">
                            <h2 style={{ color: "#3498db" }}>Pourquoi parler de data-visualisation</h2>

                            <p style={{ fontSize: "15px", lineHeight: "40px", fontFamily: "Orbitron", color: "white" }}>
                                La data-visualisation c'est le pouvoir de visualiser des données en un instant 
                                pour optimiser le temps et réduire les coûts.
                                Transformez les flux de données complexes en informations exploitables.
                            </p>
                        </article>
                    </Section>

                    <Section id="bloc-img-principle">
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


            <Aside id="contain-bloc-beta">
                <Section id="bloc-beta">
                    <Section id="beta-registered">
                        <FormNewsLetter value={"S'inscrire"} />
                    </Section>

                    <Section id="beta-text">
                        <article>
                            <h2 style={{ textAlign: "center" }}>Informations</h2>
                            <p style={{ fontSize: "18px", lineHeight: "40px", color: "black", textAlign: "center" }}>
                            Inscrivez-vous à notre newsletter pour suivre notre actualité et être informé des mises à jour. Vous aurez également l'opportunité d'essayer les nouvelles fonctionnalités en participant en avant-première à nos programmes bêta, 
                            ouverts en partie aux suggestions et commentaires.
                            </p>
                        </article>
                    </Section>
                </Section>
            </Aside> 


            <Aside id="contain-bloc-comment">
                <Section id="bloc-comment">
                    <Section id="comment-text">
                        <article>
                            <h2 style={{ textAlign: "center", color: "white" }}>Participez</h2>
                            <p style={{ fontSize: "18px", lineHeight: "40px", color: "white", textAlign: "center" }}>
                                N'hésitez pas à nous laisser un commentaire ! 
                                Votre retour est précieux pour nous aider à améliorer notre service.
                            </p>
                        </article>
                    </Section>

                    <Section id="comment-registered">

                        <Form
                            id="form_comment"
                            className="Form_comment"
                            type="email"
                            value={language.publish}
                            placeholder="mail@you.com" 
                                children={
                                    <label id="comment">{language.comment}</label>
                                }
                        />
                    </Section>
                </Section>
            </Aside>


            <Aside style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
                <Section id="bloc-footer">
                    <Section style={{ display: "flex", flex: "25%", justifyContent: "space-evenly", alignItems: "center", backgroundColor: "#252525" }}>
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
                    
                    <Section id="contact-footer">
                        <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "16px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                            <ul style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", backgroundColor: "transparent" }}>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#127968;</Span><Span>PipingData by <Span style={{ textDecoration: "underline" }}><Link href="https://elm-web.fr" target="_blank" container="Elm-web.fr"/></Span></Span></p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#9742;</Span>+33761302846</p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#x1F4E7;</Span>contact.pipingdata@gmail.com</p></li>
                                <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><p style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: "10px", fontSize: "1em", lineHeight: "15px", color: "white" }}><Span style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", alignSelf: "center", fontSize: "1em", padding: "0 10px 0 0" }}>&#x1F512;</Span><Button id="rgpd" thisMargin={"0 1%"} thisPadding={"2.5% 0"} thisWidth={"30%"} thisFontSize={"13px"} className="Rgpd" thisColorButton={"#484848"} type="button" value="rgpd" display={() => (!showRgpd ? setShowRgpd(true) : setShowRgpd(false))}>RGPD</Button></p></li>
                            </ul>
                        </article>
                    </Section>

                    <Section style={{ display: "flex", flex: "30%", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                        <article style={{ display: "flex", width: "auto", justifyContent: "center", alignItems: "center", fontSize: "16px", textAlign: "center", lineHeight: "0.25", backgroundColor: "transparent" }}>
                            <ul id="list-ul-footer">
                                <div style={{ lineHeight: "1" }}>
                                    <li style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", backgroundColor: "transparent" }}><h4 style={{ marginLeft: "10px", fontSize: "calc(0.5vw+0.25em)", color: "white", textAlign: "left" }}>Autres Applications</h4></li>
                                    
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

            <Section style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "5px 0", backgroundColor: "white" }}><p style={{ display: "flex", justifyContent: "center", alignItems: "center", lineHeight: "calc(0.75vw+0.5em)", fontSize: "calc(0.75vw+0.5em)", color: "black" }}><Span style={{ padding: "0 5px", color: "black", lineHeight: "calc(2vw+1em)", fontSize: "calc(2vw+1em)", fontWeight: "bold" }}>©</Span> 2023 Tous droits réservés. ELM-web - PipingData</p></Section>
        </Section> 
        
        : 

        <Section style={{ position: "absolute", display: "flex", margin: "0", padding: "0", justifyContent: "center", alignItems: "center", width: "100%", alignSelf: "center", margin: "auto", height: "100%", backgroundColor: "white" }}>
            <Section style={{ position: "absolute", display: "flex", width: "70%", height: "80%", padding: "2.5%", justifyContent: "center", alignItems: "flex-evenly" }}>
                <Section style={{ display: "flex", flexDirection: "column", width: "80%", justifyContent: "center", alignItems: "flex-start", border: "1px solid black", borderRadius: "10px" }}>
                    <article style= {{ padding: "0 5%", overflow: "scroll" }}>
                        <h2 style={{ textAlign: "center", color: "black" }}>Confidentialité</h2>
                        <p style={{ fontSize: "14px", lineHeight: "30px", color: "black", textAlign: "center" }}>
                            Cher utilisateur,

                            Nous tenons à vous informer que notre site Web respecte pleinement le Règlement Général sur la Protection des Données (RGPD) de l'Union européenne.

                            En ce qui concerne les avis que vous fournissez, veuillez noter que nous les collectons uniquement dans le but de les afficher aux visiteurs de notre site. Vos avis contribuent à améliorer notre service et à informer d'autres utilisateurs sur leur expérience potentielle avec nos produits ou services.

                            En ce qui concerne les adresses e-mail, nous les collectons uniquement lorsque vous vous inscrivez volontairement à notre newsletter ou à notre programme bêta en fournissant votre consentement explicite. Ces adresses e-mail ne seront utilisées que dans le cadre spécifié et ne seront en aucun cas partagées, vendues ou louées à des tiers.

                            Nous prenons la sécurité et la confidentialité de vos données personnelles très au sérieux. Si vous avez des questions ou des préoccupations concernant la façon dont nous utilisons vos données, n'hésitez pas à nous contacter à l'adresse [votre adresse e-mail de contact].

                            Merci pour votre confiance et votre soutien continu.
                        </p>
                    </article>
                    
                    <Button id="rgpd" className="Rgpd" type="button" value="rgpd" display={() => (showRgpd ? setShowRgpd(false) : setShowRgpd(true))}>Retour</Button>
                </Section>
            </Section>
        </Section>)
  
  );

}

export default App;

