import '../App.css'
import twitterLogo from "../img/twitter.svg"
import instagramLogo from "../img/instagram2.svg"
import youtubeLogo from "../img/youtube.svg"


function Footer (){

    return(
        <div className="footer-c">
        <div className="footer--title-c">
            <span className="footer--title">REJOIGNEZ LA COMMUNAUTE</span>
        </div>
        <div className="footer--socials">
            <img src={twitterLogo} alt="twitter" height="30px"></img>
            <img src={instagramLogo} alt="ig" height="40px"></img>
            <img src={youtubeLogo} alt="ytb" height="30px"></img>
        </div>
            <p className="desc2">Suivez nous sur nos différents réseaux sociaux <br /> pour être au courant des  dernieres nouvelles du projet</p>
        <div className="footer--title2-c"> 
            <span className="footer--title2">LIGHT NOVEL FRANCE</span>
        </div>
        <span className="an">Le site francophone dédié au light novel !</span>
        <div className="mentions-c">
            <ul className="mentions">
                <li className="who">qui sommes-nous ?</li>
                <li className="partner">partenaires</li>
                <li className="legal">mentions légal</li>
                <li className="contact">contact</li>
                <li className="join">nous rejoindre</li>
            </ul>
        </div>
        <p className="copyright"> Toutes marques ou images présentes sur ce site sont des marques déposées et/ou protégées par leurs propriétaires respectifs.<br />
            Copyright ©2022 LIGHT NOVEL FRANCE
        </p>
    </div>
    )
}
export default Footer