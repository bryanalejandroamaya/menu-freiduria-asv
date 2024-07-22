import { useState, useEffect } from 'react'
import bigScreenBackground from './../public/BigScreenBackgroundv2.png';
import smallScreenBackground from './../public/SmallScreenBackground.webp';
import './App.css'

function App() {
  const [currentLogo, setCurrentLogo] = useState<string>(bigScreenBackground); // Estado para la imagen actual

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setCurrentLogo(smallScreenBackground); // Cambia a la imagen para pantallas pequeñas
      } else {
        setCurrentLogo(bigScreenBackground); // Vuelve a la imagen original
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
        <img src={currentLogo} className="background"></img>
      </div>
    </>
  )
}

export default App
