import { useState, MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Menu />
	},
	{
		path: '/',
		element: <Cart />
	}, {
		path: '*',
		element: <ErrorPage />
	}
]);

function App() {

	const [couner, setCounter] = useState<number>(0);

	const addCounter = (e: MouseEvent) => {
		console.log(e);

	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearenc='big' onClick={addCounter}>Кнопка</Button>
			<Input placeholder='Email' />
			<div>
				<a href="/">Menu</a>
				<a href="/cart">Корзина</a>
			</div>

			<RouterProvider router={router}>

			</RouterProvider>
		</>
	);
}

export default App;
