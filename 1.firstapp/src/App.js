
import './App.css';
import Header from './Header';
import Products_list from './Products_list';

function App() {

function doSomthing(){
  console.log("Hello i am clicked");
}

  return (
    <div className="App">
      
      <Header />
     <Products_list/>
     <button className='btn' onClick={doSomthing}>Click</button>
       
      
    </div>
  );
}

export default App;
