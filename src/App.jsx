import logo from './logo.svg';
import './App.css';
import Result from "./components/Result";
import Button from "./components/Button";
import MathOperations from "./components/MathOperations";

function App() {
    // Lo que ejecuta la función
    console.log("Renderización de App");

    const clickHandlerFunction = text =>{
        console.log("el texto es: " + text)
    };

    return (
        <main className='react-calculator'>
            <Result value={"10"}/>
            <div className="numbers">
                <Button text={"1"} clickHandler={clickHandlerFunction}/>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
            </div>
            <div className="functions">
                <button>
                    clear
                </button>
                <button>
                    r
                </button>
            </div>
            <MathOperations onClickEquals={equals => {console.log(equals)}}
                            onClickOperation={operation => {console.log(operation)}}/>

        </main>
    )
}

export default App;
