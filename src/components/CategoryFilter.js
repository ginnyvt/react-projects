import classes from "../assets/styles/CategoryFilter.module.css";

const CategoryFilter = ({ menuList, onSelectCategory, activeCategory }) => {
	const categories = ["all", ...new Set(menuList.map((item) => item.category))];

	function handleCategoryClick(category) {
		onSelectCategory(category);
	}

	const categoriesButton = categories.map((category) => (
		<button
			key={category}
			type="button"
			onClick={() => handleCategoryClick(category)}
			className={`${classes["filter-btn"]} ${activeCategory === category ? classes.active : ""}`}
		>
			{category}
		</button>
	));

	return <div className={classes["category-filter"]}>{categoriesButton}</div>;
};

export default CategoryFilter;
