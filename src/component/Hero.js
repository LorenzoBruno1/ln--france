import '../App.css'
import ArticlePreview from './ArticlePreview'

function Hero(props){
    return(
        <div className="hero-c">
            <ArticlePreview
            img={props.img} 
            title={props.title}
            text={props.text}
            />
        </div>
    )
}
export default Hero