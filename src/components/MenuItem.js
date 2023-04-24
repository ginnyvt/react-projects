const MenuItem = ({ item }) => {
	return (
		<article className="menu-item">
			<img src={item.img} alt={item.title} />
			<div className="item-info">
				<header>
					<h5>{item.title}</h5>
					<p className="item-price">${item.price}</p>
				</header>
				<p className="item-desc">{item.desc}</p>
			</div>
		</article>
	);
};

export default MenuItem;
