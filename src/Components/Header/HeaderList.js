function HeaderList({LinkName, LinkUrl}) {
	return (
		<li className="nav-item">
			<a className="nav-link js-scroll-trigger" href={LinkUrl}>
				{LinkName}
			</a>
		</li>
	);
}

export default HeaderList;