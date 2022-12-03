import '../App.css'

// event.target.values

function ArticlePreview(props){

    return(
        <div 
            className="ArticlePreview-c" 
            style={{
                backgroundImage:`url(${props.img})`
        }}>
             <div class="ArticlePreview--desc">
                <h3 class="ArticlePreview--titledesc">{props.title}</h3>
                <p class="ArticlePreview--textdesc">{props.text}</p>
            </div>
        </div>
    )
}

export default ArticlePreview