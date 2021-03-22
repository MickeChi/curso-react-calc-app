import React, {useState} from 'react'
import words from 'lodash.words'
import './App.css';
import Result from "./components/Result";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";

function App() {

    // Posición 1 del useState es el valor  //Posición 2 del useState es una función que modifica el valor
    const [stack, setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g);
    const result = items.length > 0 ? items[items.length-1] : 0;

    return (
        <main className='react-calculator'>
            <Result value={result.toString()} history={stack}/>
            <Numbers onClickNumber={number => {
                console.log(number);
                setStack(`${stack}${number}`)}
            }/>
            <Functions onContentClear={() => {
                console.log("content clear");
                setStack("");
            }
            }
           onDelete={()=>{
               console.log("Delete");
               if(stack.length > 0){
                   const newStack = stack.substr(0, stack.length -1);
                   setStack(`${newStack}`)
               }

           }
           }/>
            <MathOperations onClickEquals={equals => {
                console.log(equals);
                setStack((eval(stack)).toString());
            }
            }
            onClickOperation={operation => {
                console.log(operation);
                setStack(`${stack}${operation}`)
            }
            }
            />

        </main>
    )
}

export default App;
