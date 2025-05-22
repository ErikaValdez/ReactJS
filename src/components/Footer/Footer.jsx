import instagramIcon from '../../icons/instagram.png';
import facebookIcon from '../../icons/facebook.png';
import youtubeIcon from '../../icons/youtube.png';

import "./Footer.css"

const FooterWeb = () => {
    return (
        <div className="footer">
            <h1 className='title-footer'>SiteGeraldine</h1>
            
            <ul className='items'>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>Galeria</a></li>
                <li><a href={"#"}>Contactenos</a></li>
            </ul>
            <div class="linea"></div>
            <ul className='items'>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#"}>Galeria</a></li>
                <li><a href={"#"}>Contactenos</a></li>
                <li><a href={"#"}>Galeria</a></li>
                <li><a href={"#"}>Contactenos</a></li>
            </ul>
            <div className='container-redes'>
                <a href="https://www.instagram.com/geraldinevaldez120/">
                    <img style={{ margin: "5px" }} src={instagramIcon} width="30" height="30" alt="Instagram" />
                </a>
                <a href="https://www.instagram.com/geraldinevaldez120/">
                    <img style={{ margin: "5px" }} src={facebookIcon}width="30" height="30" alt="Facebook" />
                </a>
                <a href="https://www.youtube.com/@geraldinevaldez8270">
                    <img style={{ margin: "5px" }} src={youtubeIcon} width="30" height="30" alt="YouTube" />
                </a>
            </div>
            <div className='copyright'>
                <p>Terminos y Condiciones Privacidad politica</p>
                <p>Copyright © 2025 SiteGeral. Todos los derechos reservados</p>
            </div>
        </div>
    );
};

export default FooterWeb;
