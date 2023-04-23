import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateCar from './components/CreateCar';
import ShowCarList from './components/ShowCarList';
import ShowCarDetails from './components/ShowCarDetails';
import UpdateCarInfo from './components/UpdateCarInfo';

function App() {
	return (
		<Router>
			<div>
				<Routes>
				<Route exact path='/' element={<ShowCarList />} />
				<Route path='/create-car' element={<CreateCar />} />
				<Route path='/edit-car/:id' element={<UpdateCarInfo />} />
				<Route path='/show-car/:id' element={<ShowCarDetails />} />
				</Routes>
			</div>
		</Router>
  	);
}

export default App;
