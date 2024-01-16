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
        <a href="https://www.freepik.com/free-vector/hand-drawn-dotted-circles-arrows-collection_14903198.htm#query=dotted%20arrow&position=2&from_view=keyword&track=ais&uuid=b42dadfe-53de-43a1-a30f-d2a7f990c357">
          Arrow by stephanie2212
        </a>{" "}
        /{" "}
        <a href="http://www.freepik.com">Designed by Vectorpocket / Freepik</a>
      </div>
    </>
  );
};

export default Home;
