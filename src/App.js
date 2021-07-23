import './App.css';
import React from 'react';
import Aside from './components/Aside';
import Button from './components/Button';
import Form from './components/Form';
import Img from './components/Img';
import Link from './components/Link';
import Section from './components/Section';
import Sectionsmart from './components/Sectionsmart';
import Span from './components/Span';
import Title from './components/Title';
import './controller/display_icones.js';

const languages = { // voir state de button langage et modifier dynamiquement à partir de l'indice basé sur id en/fr
                    // n'avoir qu'un objet dans l'objet languages.
    'fr':   {'version': 'Version Premium 2,99€', 
             'comment': 'Publiez un Commentaire',
             'publish': 'Publiez'
            }, 

    'en':   {'version': 'Premium Version 2, 99€', 
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
                badgeTrust.style.transform = "rotate(180deg)";
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
                badgeTrust.style.transform = "rotate(0deg)";
                ButtonGoogleStore.setAttribute("src", "assets/badge-google-fr.png");
                ButtonAppleStore.setAttribute("src", "assets/badge-apple-fr.png");

              }, 700);

              language = languages.en; 
              return language;
            }
} 

function App() {

var tabElbowsButtons = ["elbow", "elbow-double", "elbow-double-oriented", "elbow-slice"];

  return (

        <Section id="app" className="App">

            <header className="App_header">

                <Section className="App_logo">
                    <Link href="https://codewithmosh.com/" className="App_link_logo">
                        <Img 
                            id="logo"                           
                            className="Logo"
                            src="assets/logo.png"
                            alt="piping-datas"
                        />
                    </Link>
                </Section>  
                        
                <Title
                    className="Ext_app"
                    container="Piping-Datas.app"
                /> 

                <Section className="App_link">
                    <Link
                        href="https://codewithmosh.com/"
                        className="link"
                        container="Piping-Infos.com"
                    />

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
                      
                <Button
                    className="Button_setting"
                    type="button"
                    value="setting"
                        children={         
                            <Img 
                                id="setting" 
                                className="Setting"
                                src="assets/setting.png" 
                                alt="setting"
                            />
                        }
                />       
            </header>

            <Section id="main" className="App_main">

                <Aside className="Main_left">

                    <Section id="bloc_trust" className="Bloc_trust">
                        <Img 
                            id="badge_trust"
                            className="Badge_trust"
                            src="assets/badge-trust-en-fr.png" 
                            alt="badge-trust"
                        />
                    </Section>

                </Aside>

                <Aside className="Main_principal">






                    <Sectionsmart className="Smart_vector" values={tabElbowsButtons} />






                </Aside>

                <Aside className="Main_right">

                    <Span  
                        id="version"
                        className="Price" 
                        container={language.version}
                    />

                    <Section id="play_stores" className="play_stores">
                        <Link href="https://codewithmosh.com/" className="App_link_google">
                            <Img 
                                id="google"  
                                className="google"
                                src="assets/badge-google-fr.png"  
                                alt="google"
                            />
                        </Link>

                        <Link href="https://codewithmosh.com/" className="App_link_apple">
                            <Img   
                                id="apple"  
                                className="apple" 
                                src="assets/badge-apple-fr.png"
                                alt="apple"
                            />
                        </Link>
                    </Section>

                    <Form
                        id="form_comment"
                        type="email"
                        value={language.publish}
                        placeholder="mail@you.com" 
                            children={
                                <label id="comment">{language.comment}</label>
                            }
                    />

                </Aside>

            </Section>        
              
        </Section>
  
  );

}

export default App;

