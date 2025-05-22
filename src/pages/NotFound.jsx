import './NotFound.css';
import { useEffect } from 'react';

//https://github.com/blank-yt/Error-404-Page-Not-Found-with-Parallax-Effect-on-Mouse-Movement-Starry-Sky-HTML-CSS-JS-/blob/main/styles.css

const NotFound = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/404-script.js"; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // limpia el script al desmontar
    };
  }, []);

  return (
    <div className="container">
      <div className="heading">404</div>
      <div className="sub1">Not all who wander are lost</div>
      <div className="sub2">But you sure are...</div>
    </div>
  );
};

export default NotFound;
