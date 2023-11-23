import { Banner } from "../components/banner/";

const Home = () => {
  return (
    <div>
      <Banner.BannerContainer variantSize="lg" variantColor="secondary">
        <Banner.BannerTitle>Título do Banner</Banner.BannerTitle>
        <Banner.BannerTextCarousel>
          <Banner.BannerText>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio quidem quo reiciendis aperiam non voluptatem, blanditiis
            labore nesciunt? Perferendis exercitationem consectetur sed pariatur
            deleniti, eaque aliquid officia inventore beatae adipisci.
          </Banner.BannerText>
          <Banner.BannerText>
            2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis ipsa, tempore nam animi fugiat, dolorum accusamus,
            cumque voluptas deleniti praesentium facilis at beatae corporis.
            Odit, reprehenderit id? Quas, possimus excepturi.
          </Banner.BannerText>
          <Banner.BannerText>
            3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident, officia praesentium dolore cupiditate numquam
            voluptatibus. Illo, esse cumque. Tempora dolorum iusto quisquam
            tenetur, inventore dignissimos nulla labore aut cupiditate quis?
          </Banner.BannerText>
          <Banner.BannerText>
            4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            officiis expedita voluptate nisi dignissimos quibusdam placeat ab
            beatae quas, nostrum quae dolore aut saepe! Quod laborum suscipit
            facere nostrum odit? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae error ratione totam reprehenderit
            molestiae! Inventore, quod. Numquam, nam neque officia harum maiores
            exercitationem error, fuga sequi veritatis recusandae enim
            aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsa laboriosam ratione deleniti quod provident doloribus libero
            hic, eaque accusantium ipsum temporibus reiciendis dolore aliquam.
            Vero minus odio laborum consequatur ut?
          </Banner.BannerText>
        </Banner.BannerTextCarousel>
      </Banner.BannerContainer>
    </div>
  );
};

export default Home;
