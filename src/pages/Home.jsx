import { Section } from "../components/Section";
import heart_img from "../assets/heart.png";

const Home = () => {
  return (
    <div>
      <h1 className="">Home</h1>
      <Section.Container>
        <Section.TextContainer className="text-left pr-[80px]">
          <Section.Title text="Soluções Tecnológicas e o Caminho à Frente" />
          <Section.Text text="WRAFFFFFFFWAAAAAAAAAAAAAAADFEEEEEEEEEEEEEEEEEEEEEEE" />
        </Section.TextContainer>
        <Section.Image className="" src={heart_img} />
      </Section.Container>
    </div>
  );
};

export default Home;
