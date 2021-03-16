import { Router } from "@reach/router";
import { PageNotFound, Home, Settings } from "./pages";
import { Login, Signup } from './pages/auth';
import FormGroup from "./components/form/FormGroup";

export default function AppRouter() {
	return (
		<Router>
			<PageNotFound default />
			<Signup path="/signup"/>
			<Login path="/login"/>
			<Home path="/" />
			<Settings path="/settings" />
		</Router>
	);
}
