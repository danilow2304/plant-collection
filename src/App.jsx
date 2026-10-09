import Navigation from "./components/Navigation.jsx";
import PlantList from "./components/PlantList.jsx";
import Footer from "./components/Footer.jsx";
import { plants } from "./data/plants.js";

function App() {
  return (
    <div className="app">
      <Navigation title="Plant Collection" links={["Home", "Plants", "About"]} />
      <main>
        <h2>Our Plants</h2>
        <PlantList plants={plants} />
      </main>
      <Footer text="Plant Collection" />
    </div>
  );
}

export default App;
