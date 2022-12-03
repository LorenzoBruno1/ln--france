import '../App.css'
import oriconImage from '../img/ayanokoji.png'


function oriconPreview(props){

    return (
        <div className="oriconPreview-c">
            {/* <h1 className="oriconPreview--title">{props.title}</h1> */}
            {/* <img src={`./${props.img}`}></img> */}
            {/* <img className="oricon--image" src={require("../img/lesenfants.jpg")} /> */}
            <img src={oriconImage} className="oricon--image"></img>
        </div>
    )
}

export default oriconPreview