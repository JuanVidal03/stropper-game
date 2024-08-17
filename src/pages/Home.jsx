import PropTypes from 'prop-types';

const Home = () => {
  const targetNavegation = [
    { title: 'Play' },
    { title: 'Opciones' },
    { title: 'Puntuacion' }
  ];

  return (
    <div className="card">
      <h2>Opciones de Navegación</h2>
      <ul className="navigation-list">
        {targetNavegation.map((item, index) => (
          <li key={index} className="navigation-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  opciones: PropTypes.array // Define el tipo de `opciones`, puedes ajustar esto según lo que necesites
};

export default Home;
