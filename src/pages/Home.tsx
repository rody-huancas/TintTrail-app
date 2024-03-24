import Hero from "@components/home/Hero";
import SelectColor from "@components/home/SelectColor";

const Home = () => {

  return (
    <section className="flex flex-col gap-10">
      <Hero />

      <SelectColor />
    </section>
  );
};

export default Home;
