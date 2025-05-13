import { motion } from "framer-motion";
import "../assets/styles.css";

function Sobre() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="title">Sobre mim</h1>
      <p className="description">
        Sou estudante de Ciência da Computação apaixonado por tecnologia, com foco em pesquisa, inovação e colaboração.
      </p>

      {/* Formação Acadêmica */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Formação Acadêmica</h2>
        <p>
          Graduando em Ciência da Computação na Universidade Federal de São Carlos (UFSCar), com previsão de conclusão em 2026.
        </p>
      </motion.div>

      {/* Iniciação Científica */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Pesquisa e Iniciação Científica</h2>
        <p>
          Atuei como bolsista CNPq no grupo BIP, com foco em processamento de imagens digitais utilizando OpenCV, scikit-image e SimpleITK.
        </p>
      </motion.div>

      {/* Organização de Eventos */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Eventos e Liderança</h2>
        <p>
          Fiz parte da equipe da SECOMP UFSCar, contribuindo na captação de palestrantes e elaboração da programação do evento.
        </p>
      </motion.div>

      {/* Certificações e Ferramentas */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Certificações e Tecnologias</h2>
        <p>
          Certificação em Red Hat System Administration e proficiência em C, C++, Python e SQL. Experiência com Trello e Git.
        </p>
      </motion.div>

      {/* Interesses e Objetivos */}
      <motion.div
        className="card"
        whileHover={{ scale: 1.05 }}
      >
        <h2>Objetivos Profissionais</h2>
        <p>
          Busco oportunidades para aplicar e expandir meus conhecimentos em projetos inovadores que integrem tecnologia e pesquisa.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Sobre;
