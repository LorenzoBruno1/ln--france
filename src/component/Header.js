import '../App.css'

function Header(props){
    return(
        <div className="header-c">
            <h2 className="header--title">{props.title}</h2>
            <p className="header--text">{props.text}</p>
            <p className="header--next"><a href="#"></a>lire la suite</p>
        </div>
    )
}

export default Header