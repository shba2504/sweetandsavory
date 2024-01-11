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
    </>
  );
};

export default Home;
