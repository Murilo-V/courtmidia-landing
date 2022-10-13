import logo from "../../assets/logo.png";
import { NavBarStyle } from "./style";

export const Navbar = () => {
  return (
    <NavBarStyle>
      <img src={logo} alt="CourtMidia Logo" />
      <div>
        <small style={{ color: "#edce7e" }}>Siga-nos nas redes sociais</small>
        <div>
          <a
            href="https://www.instagram.com/court.midia/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/courtmidia/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=556291895496"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>
    </NavBarStyle>
  );
};
