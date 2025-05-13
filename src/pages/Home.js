import Typical from 'react-typical';

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-4 py-8">
      <main className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo ao meu site!</h1>
        <p className="text-xl text-blue-700 mb-6">
        <Typewriter
            words={[
            'Esta é a landing page, construída com React!',
            'Sou estudante de Ciência da Computação na UFSCar...',
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
        />
        </p>

        <div className="text-left bg-white p-6 rounded shadow-md text-gray-900 space-y-4">
          <p>
            Sou estudante de Ciência da Computação na Universidade Federal de São Carlos (UFSCar), com formação prevista para 2025, e tenho experiência acadêmica e prática em áreas como processamento de imagens e Visual Language Models - VLMs.
          </p>
          <p>
            Atuei como bolsista de Iniciação Científica pelo CNPq no grupo BIP, desenvolvendo habilidades em técnicas de processamento de imagens digitais e uso de ferramentas como OpenCV, scikit-image e SimpleITK.
          </p>
          <p>
            Também integrei a equipe de conteúdo da Semana da Computação da UFSCar (SECOMP), onde fui responsável pela captação de palestrantes e elaboração de programação.
          </p>
          <p>
            Tenho certificação em Red Hat System Administration e proficiência em linguagens como C, C++, Python e SQL. Além disso, possuo conhecimento em ferramentas como Trello e Git para organização e gerenciamento de projetos.
          </p>
          <p>
            Busco sempre novas oportunidades para aplicar e expandir meus conhecimentos, especialmente em projetos inovadores que combinam tecnologia e pesquisa.
          </p>
        </div>
      </main>

      <footer className="mt-8 py-4 border-t text-center text-sm text-gray-600">
        © {new Date().getFullYear()} João Migliatti. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Home;
