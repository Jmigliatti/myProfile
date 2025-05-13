import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../assets/styles.css";

function Contato() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="title">Contato</h1>
      <p className="description">
        Fique à vontade para me chamar nas redes ou enviar um e-mail.
      </p>

      <div className="contact-grid">
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/5519991915612"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaWhatsapp className="icon" />
          <h2>WhatsApp</h2>
          <p>+55 19 99191-5612</p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/joao-paulo-migliatti-a66b66281/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaLinkedin className="icon" />
          <h2>LinkedIn</h2>
          <p>@joao-paulo-migliatti</p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Jmigliatti"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub className="icon" />
          <h2>GitHub</h2>
          <p>@Jmigliatti</p>
        </motion.a>

        {/* Email Pessoal */}
        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <FaEnvelope className="icon" />
          <h2>Email</h2>
          <p>joao.paulo.migliatti@gmail.com</p>
        </motion.div>

        {/* Email UFSCar */}
        <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
          <FaEnvelope className="icon" />
          <h2>Email Universitário</h2>
          <p>joaomigliatti@estudante.ufscar.br</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contato;
