import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import {createStore} from "redux"
const  calculatorReducer = (state={value:0},action) => {
        switch(action.type){
                case "addition":{
                        return {value:state.value+action.payload}
                }
                case "multipictaion":{
                        console.log(action.payload,state.value)
                        return {value:state.value*action.payload}
                }
                case "division":{
                        return {value:state.value/action.payload}
                }
                default:{
                        return {value:state.value}
                }
        }
}
let globalStore = createStore(calculatorReducer)
globalStore.subscribe(()=>console.log(globalStore.getState()))
function App() {
        // function counterReducer(state={value:0},action){
        //         switch(action.type){
        //                 case 'increment':{
        //                         return {value:state.value+1}
        //                 }
        //                 case 'decrement':{
        //                         return {value:state.value-1}
        //                 }
        //                 default:{
        //                         return {value:state.value}
        //                 }
        //         }
        // }
        // let globalStore = createStore(counterReducer)
        // globalStore.subscribe(()=>console.log(globalStore.getState()))
        const [payload,setPayload] = useState(0)



return (
<>
{/* <button onClick={()=>globalStore.dispatch({type:"increment"})}>Increment</button>
<button onClick={()=>globalStore.dispatch({type:"decrement"})}>Decrement</button> */}
<input type="number" placeholder="Enter  a number..." onChange={(e)=>{setPayload(parseInt(e.target.value))}}/>
<button onClick={()=>globalStore.dispatch({type:"addition",payload:payload})}>Addition</button>
<button onClick={()=>globalStore.dispatch({type:"multipictaion",payload:payload})}>Multiplication</button>
<button onClick={()=>globalStore.dispatch({type:"division",payload:payload})}>Division</button>

</>

  );
}

export default App;
