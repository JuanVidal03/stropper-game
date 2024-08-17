import { useContext, useState } from "react";
import Layout from "../layout/Layout.jsx";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../context/GlobalContext.jsx"


const Options = () => {

    const { setDificultad, dificultad } = useContext(GlobalContext);
    const [difficulty, setDifficulty] = useState(dificultad);


    const navigate = useNavigate();
    const redirectHome = () =>  navigate("/");
    const changeDifficulty = () => setDificultad(difficulty);

    return (
        <Layout>
            <div className="p-12">
                <h2 className="font-bold text-lg text-center">Selecciona el nivel de dificultad</h2>
                <div>
                    <select onChange={(e) => setDifficulty(e.target.value)} name="" id="">
                        <option value="normal">Normal</option>
                        <option value="legendario">Legendario</option>
                        <option value="nivel dios">Nivel Dios</option>
                    </select>

                    <div>
                        <button onClick={changeDifficulty}>Confirmar</button>
                        <button onClick={redirectHome}>Cancelar</button>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Options;
