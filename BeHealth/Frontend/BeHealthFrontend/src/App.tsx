<<<<<<< HEAD
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ArangeVisit from "./pages/ArangeVisit";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/arange-visit" element={<ArangeVisit />} />
			</Routes>
			<Footer />
		</div>
	);
=======
import { Visits } from './pages/Visits'
import './App.css'

function App() {
  return (
    <div className="App">
      <Visits />
    </div>
  )
>>>>>>> 9769e9c (show visits page, for testing)
}

export default App;
