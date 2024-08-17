import { useState, useEffect, useContext } from "react";
import Layout from "../layout/Layout.jsx";
import { useNavigate, redirect } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext.jsx";

import { verifyDifficulty } from "../utils/verifyDifficulty.js";

const Play = () => {

    const [counterWords, setCounterWords] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [word, setWord] = useState("");
    const [randomColor, setRandomColor] = useState("");
    const [matchWord, setMatchWord] = useState([]);
    const [currentWord, setCurrentWord] = useState("");

    const navigate = useNavigate();
    const { dificultad } = useContext(GlobalContext);

    const colors = [
        { title: "Amarillo", color: "yellow", id: 1 }, 
        { title: "Azul", color: "blue", id: 2 }, 
        { title: "Verde", color: "green", id: 3 }, 
        { title: "Naranja", color: "orange", id: 4 }, 
        { title: "Rosado", color: "pink", id: 5 },
        { title: "Morado", color: "purple", id: 6 },
    ];
    // generar un random color
    const renderRandomColorTitle = () => {
        let randomNumber = Math.floor(Math.random() * colors.length); 
        let randomColor = {color: colors[randomNumber].title, id: colors[randomNumber].id };
        return randomColor;
    }
    const renderRandomColor = () => {
        let randomNumber = Math.floor(Math.random() * colors.length); 
        let randomColor = {color: colors[randomNumber].color, id: colors[randomNumber].id };
        return randomColor;
    }

    // manejar el interval 
    useEffect(() => {
        
        const changingWordInterval = setInterval(() => {
            setWord(renderRandomColorTitle());
            setRandomColor(renderRandomColor());
            setCounterWords(counterWords + 1);
            
        }, verifyDifficulty(dificultad));

        return () => clearInterval(changingWordInterval);

    }, [word, dificultad]);

    // manejar el timer
    useEffect(() => {
        const interval = setInterval(() => {

            setTimeLeft((prevTime) => prevTime - 1);
            if (timeLeft <= 0) {
                clearInterval(interval);
                navigate("/");
            }
          }, 1000);
          

          return () => clearInterval(interval);

    }, [timeLeft]);


    // verificar las opciones
    const verifyAnswer = () => {

        const checkData = { idRandomColor: randomColor.id, idWord: word.id };

        if (checkData.idRandomColor === checkData.idWord) {
            
            // si concuerdan se agrega al array
            if (word.id === randomColor.id ) {
                setMatchWord([...matchWord, word]);
            }

        }

    }


    return (
        <Layout>

            <div className="bg-green-600 p-4 flex gap-4 items-center justify-center">
                <div className="text-center text-white font-bold">
                    <h1 className="text-[50px]">{counterWords}</h1>
                    <p>Cantidad palabras</p>
                </div>
                <div className="text-center text-white font-bold">
                    <h1 className="text-[50px]">{matchWord.length}</h1>
                    <p>Palabras correctas</p>
                </div>
                <div className="text-center text-white font-bold">
                    <h1 className="text-[50px]">{timeLeft}s</h1>
                    <p>Tiempo restante</p>
                </div>
            </div>

            <div className="p-8">
                <p className="font-bold">Nivel de dificultad: {dificultad}</p>
            </div>

            <div className="p-12">
                <h2 style={{color: randomColor.color}} className='text-center text-3xl'>{word.color}</h2>
            </div>


            <div className="flex gap-4 justify-center">
                <button onClick={verifyAnswer} className="text-white p-2 rounded-sm bg-green-500">Correcto</button>
                <button onClick={verifyAnswer} className="text-white p-2 rounded-sm bg-red-500">Incorrecto</button>
            </div>


        </Layout>
    );
}

export default Play;
