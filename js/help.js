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
	const links = document.querySelectorAll('header .link-in');
	let paths = location.href.split('/');
	let currPath = paths[paths.length - 1];

	// Проверяем наличие текущего url в навигации, и если такая навигация есть, то активировать ее
	let currentActiveLink = document.querySelector('.menu').querySelector(`[href='${currPath}']`);
	if (!!currentActiveLink) {
		currentActiveLink.parentElement.classList.add('active');
	}

	links.forEach((link) => {
		// let l = link.querySelector('a').getAttribute('href');

		link.addEventListener('click', (e) => {
			const tar = e.target;
			paths = location.href.split('/');
			currPath = paths[paths.length - 1];
			console.log(currPath);

			menus.forEach((el) => {
				el.classList.remove('active');
			});

			if (document.querySelector('.menu').querySelector(`[href='${currPath}']`)) {
				console.log(document.querySelector('.menu').querySelector(`[href='${currPath}']`));
				document
					.querySelector('.menu')
					.querySelector(`[href='${currPath}']`)
					.parentElement.classList.add('active');
			}
			// tar.parentElement.classList.add('active');
		});
	});
}

menuScroll();
activeLinksMenu();
