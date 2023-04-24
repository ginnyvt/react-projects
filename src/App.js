import { menuList } from "./assets/data";

function App() {
	/* make new array that contains unique categories */
	const categories = [...new Set(menuList.map((item) => item.category))];
	console.log(categories);
	return (
		<>
			<h3>Menu </h3>
		</>
	);
}

export default App;
