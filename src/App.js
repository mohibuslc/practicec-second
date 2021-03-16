import React,{useState} from 'react'; // if this line not have then make Add Same place There:

import logo from './logo.svg';
import './App.css';

function App() {
  const PriceInfo =[
    {name:'Iphone X-321', Price:'$1140'},
    {name:'Ipad X-421', Price :' $800'}
  
  
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>Apple Store</h1>
      
        <Counter></Counter> 

      {
      PriceInfo.map(PriceInfos => <li>{PriceInfos.name}</li>
        
        )
      }

    <Iteams name = {PriceInfo[0].name} price ={PriceInfo[0].Price}></Iteams>
    <Iteams name = {PriceInfo[1].name} price ={PriceInfo[1].Price}></Iteams>
      </header>
    </div>
  ); 
}
function Counter (){
const [count, setCount] = useState(18);
//const handaler =() => console.log('clicked'); // this line help of looking on console.log webpage in inspact:

const IncraseHandaler =() =>{

  const newCount =count+1;
  setCount(newCount);
}
const DecraseHandaler =() =>{

  const newCount =count-1;
  setCount(newCount);
}


  return (

    <div>
      <h1> Count:{count}</h1>
      <button onClick = {IncraseHandaler}>Incrase</button>
      <button onClick = {DecraseHandaler}>decrase</button>
    </div>
  )
}
function Iteams(props){
const ProductDesign ={

  border : '1px solid gray',
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  height:'250px',
  width:'400px',
  margin:'10px',
  float:'left'

}

return(
    <div style = {ProductDesign}>
  
  <h2>{props.name}</h2>
  <h1>{props.price} </h1>
  <button>Buy Now </button>

  </div>
  )
}
 
export default App;
