import "./global.css";
import backgroundSVG from "../src/assets/svg/World-Map.svg";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundSVG})` }}>
      <Header />
    </div>
  );
}
export default App;
