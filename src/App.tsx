import { useState, useEffect } from 'react';
import bigScreenBackground from './../public/BigScreenBackgroundv2.png';
import smallScreenBackground from './../public/SmallScreenBackground.jpeg';
import smallScreenMenu from './../public/SmallScreenMenu.png';
import './App.css';

function App() {
  const [currentLogo, setCurrentLogo] = useState<string>(bigScreenBackground); // Estado para la imagen actual
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 1280); // Estado para determinar si es pantalla pequeña

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setCurrentLogo(smallScreenBackground); // Cambia a la imagen para pantallas pequeñas
        setIsSmallScreen(true); // Marca como pantalla pequeña
      } else {
        setCurrentLogo(bigScreenBackground); // Vuelve a la imagen original
        setIsSmallScreen(false); // Marca como pantalla grande
      }
    };

    window.addEventListener('resize', handleResize);

    // Ejecutar al montar el componente para establecer el estado inicial
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="app">
        <img src={currentLogo} className={`background ${isSmallScreen ? 'background-fixed' : ''}`} alt="background" />
        {isSmallScreen && (
          <div className="menu">
            <img src={smallScreenMenu} alt="small screen menu" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
