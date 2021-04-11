import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TestPage from "./pages/TestPage/TestPage";
import NavBar from "./components/NavBar/NavBar";
import SlidingWindowPage from "./pages/SlidingWindowPage/SlidingWindowPage";

function App() {
	return (
		<Router>
			<NavBar></NavBar>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/sliding-window" component={SlidingWindowPage} />
				<Route exact path="/test" component={TestPage} />
			</Switch>
		</Router>
	);
}

export default App;
