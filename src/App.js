import { useState } from "react";
import { menuList } from "./assets/data";
import CategoryFilter from "./components/CategoryFilter";
import MenuItem from "./components/MenuItem";

function App() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	function handleSelectCategory(category) {
		setSelectedCategory(category);
	}

	const filteredMenuList =
		selectedCategory === "all" ? menuList : menuList.filter((item) => item.category === selectedCategory);

	return (
		<main>
			<section>
				<div className="section-title">
					<h3>Menu </h3>
					<div className="section-title__underline"></div>
				</div>

				<div className="container">
					{/* Filtering */}
					<CategoryFilter menuList={menuList} onSelectCategory={handleSelectCategory} activeCategory={selectedCategory} />
					<div className="menu-wrapper">
						{filteredMenuList.map((item) => (
							<MenuItem item={item} key={item.id} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
