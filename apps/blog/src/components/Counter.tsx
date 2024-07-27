import { useState } from 'react';
import './Counter.css';
import { isBlank } from 'common';


interface  CounterProps {
	children: JSX.Element
	count: number
}

export const Counter: React.FC<CounterProps> = ({
	children,
	count: initialCount,
}) =>  {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
				<p>{isBlank("") ? "package isBlank works!" : "isBlank does not work!"}</p>
			</div>
			<div className="counter-message">{children}</div>
			<p>Prueba PR: 2</p>
		</>
	);
}