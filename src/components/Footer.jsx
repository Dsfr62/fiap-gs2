import { shuffleArray } from "../utils/functions";
import { members } from "../utils/members";

const Footer = () => {
  function getCurrentYear() {
    return new Date().getFullYear();
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
              <li key={member[1]}>{member[0]}</li>
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
