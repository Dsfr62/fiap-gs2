import { Section } from "../components/Section";
import baby_img from "../assets/baby.png";

const Home = () => {
  return (
    <div>
      <h1 className="">Home</h1>
      <Section.Container>
        <Section.Image src={baby_img} />
        <Section.TextContainer>
          <Section.Title text="Ambsowidas KLSQAKM" />
          <Section.Text text="WRAFFFFFFFWAAAAAAAAAAAAAAADFEEEEEEEEEEEEEEEEEEEEEEE" />
        </Section.TextContainer>
      </Section.Container>
    </div>
  );
};

export default Home;
