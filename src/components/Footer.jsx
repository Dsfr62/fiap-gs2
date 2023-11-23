const Footer = () => {
  const members = [
    "Eduardo Sávio",
    "Guilherme Mazur",
    "Marina Pereira",
    "Bruno Lagos",
    "Gustavo Vieira",
  ];

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  function shuffleArray(array) {
    let newArray = array.slice();

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  }

  return (
    <footer>
      <div className="bg-gray-900 text-gray-100 text-center text-xs p-3 w-full border-t flex justify-center">
        <div className="w-44 flex flex-col space-y-2">
          <p className="font-semibold">WellnessChat</p>
          <p>
            Um projeto para a FIAP em parceria com a Hapvida Notredame
            Intermédica
          </p>
        </div>
        <div className="w-0 border-l border-gray-100 border-opacity-20 mx-8" />
        <div className="flex flex-col space-y-2 px-4">
          <p className="font-semibold">Feito com ❤️ por:</p>
          <ul>
            {shuffleArray(members).map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black text-gray-100 text-center text-xs p-1 w-full font-semibold">
        © WellnessChat {getCurrentYear()} - Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
