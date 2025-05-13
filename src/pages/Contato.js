import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

function Contato() {
  return (
    <div className="container">
      <h1>Contato</h1>
      <p>Entre em contato comigo pelas redes abaixo:</p>
      <div style={{ display: "flex", gap: "24px", fontSize: "2rem", marginTop: "24px" }}>
        <a href="joao.paulo.migliatti@gmail.com" title="E-mail" style={{ color: "#43e97b" }}>
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/joao-paulo-migliatti-a66b66281" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: "#0077b5" }}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/Jmigliatti" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: "#333" }}>
          <FaGithub />
        </a>
        <a href="https://wa.me/5519991915612" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: "#25d366" }}>
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Contato;
