import logo from "./logo.svg";
import "./App.css";
import sac from "./myimage/sac-noir.jpeg";
import sac2 from "./myimage/michael-kors.jpeg";

function App() {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>Your name here </h1>
      <br></br>
      <div className="div">
        <img src={sac} alt="myimage" className="sac1" />
        <br></br>
        <img src={sac2} alt="myimage" className="sac1" />
        <iframe
          className="video"
          src="https://www.youtube.com/embed/kzXmaIzcWAU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default App;
