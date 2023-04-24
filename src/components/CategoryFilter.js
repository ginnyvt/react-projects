const CategoryFilter = ({ menuList, onSelectCategory }) => {
	const categories = ["all", ...new Set(menuList.map((item) => item.category))];

	function handleCategoryClick(category) {
		onSelectCategory(category);
	}

	const categoriesButton = categories.map((category) => (
		<button key={category} type="button" onClick={() => handleCategoryClick(category)}>
			{category}
		</button>
	));

	return <div className="category-filter">{categoriesButton}</div>;
};

export default CategoryFilter;
