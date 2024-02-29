import AboutPreview from "./AboutPreview/AboutPreview";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MenuPreview from "./MenuPreview/MenuPreview";
import Nav from "./Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <MenuPreview />
      <AboutPreview />
      <Footer />
      <div className="credits">
        <span>Image credits: </span>
        <a href="http://www.freepik.com">Designed by Vectorpocket / Freepik</a>
      </div>
    </>
  );
};

export default Home;
