import {  useNavigate } from 'react-router-dom';

const Home = () => {
  const targetNavegation = [
    { title: 'Play', path: '/play' },
    { title: 'Opciones', path: '/options' },
    { title: 'Puntuacion'}
  ];
  const navigate =useNavigate();

  return (
    <div className="card">
      <h2>Opciones de Navegación</h2>
      <ul className="navigation-list">
        {targetNavegation.map((item, index) => (
          <li
            key={index}
            className="navigation-item"
            onClick={() => navigate(item.path)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
