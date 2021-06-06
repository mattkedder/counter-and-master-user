import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes />
		</Router>
	);
}

export default App;
