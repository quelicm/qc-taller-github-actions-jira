import { useState } from 'react';
import './Counter.css';
import { isBlank } from 'common';

export default function Counter({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) {
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
			<p>Prueba PR: 1</p>
		</>
	);
}
