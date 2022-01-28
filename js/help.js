function menuScroll() {
	const list = document.querySelectorAll('.link-in');
	const paths = location.pathname.split('/');
	const currPath = paths[paths.length - 1];

	// console.log('path: ', paths);
	// console.log('current path: ', currPath);

	list.forEach((el) => {
		el.addEventListener('click', scroll, { capture: true });
	});

	function scroll(e) {
		let tar = e.currentTarget;
		let h = tar.getAttribute('href');
		let arr = h.split('#');
		let id = arr[1];

		console.log(id);

		// ссылка есть | текущий файл совпадает с href страницей | на странице есть этот id target
		if (h && id && currPath === arr[0] && document.querySelector(`#${id}`)) {
			console.log('scroll');
			e.preventDefault();
			// меняем хэш id
			location.hash = `#${id}`;

			const header = document.querySelector('header');
			const tar = document.querySelector(`#${id}`).offsetTop;
			const diff = header.offsetHeight;
			scrollTo({
				top: tar - diff,
				behavior: 'smooth',
			});
		}
	}
}

function activeLinksMenu() {
	const menus = document.querySelectorAll('.menu__item');
	const paths = location.href.split('/');
	const currPath = paths[paths.length - 1];

	menus.forEach((link) => {
		let l = link.querySelector('a').getAttribute('href');
		if (l === currPath) {
			link.classList.add('active');
		}

		link.addEventListener('click', (e) => {
			const tar = e.target;

			menus.forEach((el) => el.classList.remove('active'));
			tar.parentElement.classList.add('active');
		});
	});
}

menuScroll();
activeLinksMenu();
