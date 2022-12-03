import '../App.css';
import OriconPreview from './OriconPreview'
import data from '../data/DataArticle'

//  const previews = data.map(index =>{
//      return(
//          <OriconPreview
//              {...index}
//          />
//      )
// })


function Oricon(props){
    return(
        <div className="Oricon-c">
            <div className="oricon--title--mobile">1 - Classroom of the Elite</div>
            <div className="oricon--title">Top ORICON  <br />-<br />MOIS DE XX</div>
                {/* {previews}  */}
            <OriconPreview />
            <div class="oricon--voirplus">voir plus</div>
        </div>
    )
}

export default Oricon