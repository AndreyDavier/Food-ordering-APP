import { useState, MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

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
		</>
	);
}

export default App;
