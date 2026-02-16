class Render {
	constructor() {
		this.generalSection = document.querySelector('#general-section');
		this.projectList = document.querySelector('.project-list');
		this.tasksContainer = document.querySelector('#tasks-container');
		this.mainTitle = document.querySelector('#main-title');
	}

	// Renderizar a seção general (Inbox, Today)
	renderGeneralSection() {
		const title = this.generalSection.querySelector('.section-title');
		this.generalSection.innerHTML = '';
		this.generalSection.appendChild(title);

		const generalItems = [
			{ name: 'Inbox', icon: 'ri-inbox-fill', view: 'inbox' },
			{ name: 'Today', icon: 'ri-calendar-fill', view: 'today' }
		];

		generalItems.forEach(item => {
			const itemElement = this._createGeneralItem(item);
			this.generalSection.appendChild(itemElement);
		});
	}

	_createGeneralItem(item) {
		const div = document.createElement('div');
		div.classList.add('project-item');
		div.setAttribute('data-view', item.view);

		div.innerHTML = `
			<i class="${item.icon}"></i>
			${item.name}
		`;
		return div;
	}

	// RENDERIZAR LISTA DE PROJETOS
	renderProjects(projects, currentProjectId) {
		this.projectList.innerHTML = '';

		projects.forEach(project => {
			const projectElement = this._createProjectElement(project);

			if (project.id === currentProjectId) {
				projectElement.classList.add('active-project');
			}
			this.projectList.appendChild(projectElement);
		});
	}

	_createProjectElement(project) {
		const div = document.createElement('div');
		div.classList.add('project-item');
		div.setAttribute('data-project-id', project.id);

		const taskCount = project.tasks.length;

		div.innerHTML = `
			<h3 class="project-name">${project.name}</h3>
			<span class="qtd-project">${taskCount}</span>
		`;
		return div;
	}
}

export default new Render();