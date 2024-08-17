import { useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext.jsx';
import { redirect, useNavigate } from 'react-router-dom';

const Options = () => {

    const { dificultad, setDificultad } = useContext(GlobalContext);

    const navigate = useNavigate();

    const redirectHome = () => navigate("/");

    return (
        <div>
            <h1>Selecciona la dificultad</h1>
            <div>
                <select onChange={(e) => setDificultad(e.target.value)}>
                    <option value="">Elije una opcion</option>
                    <option value="normal">Normal</option>
                    <option value="legendario">Legendario</option>
                    <option value="nivel dios">Nivel Dios</option>
                </select>
            </div>
            
            <div>
                <button className='py-2 px-4 bg-green-500' onClick={redirectHome}>Confirmar</button>
                <button className='py-2 px-4 bg-red-500' onClick={redirectHome}>Cancelar</button>
            </div>
        </div>
    );
}

export default Options;
