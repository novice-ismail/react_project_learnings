import {useState, useEffect} from 'react'
import './App.css';
import News from './News';


//800706b783e24e07bd5f5f8dfa8b1151
function App() {

let [articles, setArticles] = useState([])
let [category, setCategory] = useState("india")

useEffect(()=>{
  fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-7&apiKey=800706b783e24e07bd5f5f8dfa8b1151`)
  .then((response)=>response.json())
  .then((news)=> {
    setArticles(news.articles);
  })
  .catch((error) =>{
    console.log(error);
  })
},[category])

  return (
    <div className="App">
      <header className='header'>

        <h1>Parso Tak</h1>
        
        <input type='text'
        onChange={(event) =>{
          if(event.target.value!=="")
          setCategory(event.target.value);
        else 
        setCategory("india");
       
       }} placeholder='Search News'/>

      </header>
      <section className='news-articles'>
      {

        articles.length!==0?

        articles.map((article) =>{
          return(
            <News key={Math.random()} article={article}/>
          )
        })
        :
        <h3>No News Found For Searched Text</h3>
      }
      
      </section>
      
    </div>
  );
}

export default App;
