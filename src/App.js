import './App.css';
import Navbar from './component/NavBar';
import Header from './component/Header';
import Hero from './component/Hero';
import Footer from './component/Footer';
import DataArticle from "./data/DataArticle";
import Oricon from "./component/Oricon"
import theImg from './img/280.png'

function App() {

  const hero = DataArticle.map (index =>{
    return(
      <Hero 
        {...index}
      />
    )
  })

  return (
    <div className="body">
      <Navbar />
      <Header   
      img={theImg}
      title="Titre Slide"
      text="text slide"
      />
      <div className="main">
        <h1 className="hero--title">Title Section One</h1>
        {hero}
      </div>
      <Oricon />
      <Footer />
    </div>

  );
}

export default App;
