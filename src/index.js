import "./style.css";

const toggleThemeBtn = document.querySelector('#toggle-theme-btn');
const aboutBtn = document.querySelector('#about-btn');

toggleThemeBtn.addEventListener('click', ()=>{
	const root = document.querySelector('body');
	if (!root) return ;
	const icon = document.querySelector('#icon-toggle-theme');
	if (root.classList.contains('dark'))
	{
		root.classList.remove('dark');
		root.classList.add('light');
		icon.classList.remove('ri-sun-fill');
		icon.classList.add('ri-moon-fill');
		return ;
	}
	root.classList.remove('light');
	root.classList.add('dark');
	icon.classList.remove('ri-moon-fill');
	icon.classList.add('ri-sun-fill');
});

aboutBtn.addEventListener('click', ()=>{
	const dialogAbout = document.querySelector('#about-dialog');
	dialogAbout.showModal();
});