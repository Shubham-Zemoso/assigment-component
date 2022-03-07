import "./Display.css";

interface Props {
	name: string;
}

const Display: React.FC<Props> = (props) => {
	const handleClick = () => {
		alert("Hello, " + props.name);
	};
	return (
		<button id="btn" onClick={handleClick}>
			Click Me!
		</button>
	);
};

export default Display;
