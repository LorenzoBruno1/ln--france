import '../App.css'
import Search from '../img/54481.png'

function NavBar (){
    return(
        <div className="navbar-c">
            <span className="navbar--burger">☰</span>
            <h1 className="navbar--h1">LIGHT NOVEL FRANCE</h1>
            <ul className="navbar--list">
                <li>accueil</li>
                <li>actualités</li>
                <li>articles</li>
                <li>critiques</li>
                <li>interviews</li>
                <li>top oricon</li>
            </ul>
            <img src={Search} className="navbar--loop"></img>
        </div>
    )
}

export default NavBar