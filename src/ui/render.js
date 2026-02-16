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


	// RENDERIZAR TASKS
	renderTasks(tasks, title = 'Inbox') {
		this.mainTitle.textContent = title;
		this.tasksContainer.innerHTML = '';

		if (tasks.length === 0) {
			this.tasksContainer.innerHTML = '<p class="empty-message">No tasks yet. Add one!</p>';
			return;
		}

		tasks.forEach(task => {
			const taskElement = this._createTaskElement(task);
			this.tasksContainer.appendChild(taskElement);
		});
	}

	_createTaskElement(task) {
		const div = document.createElement('div');
		div.classList.add('task-card');
		div.setAttribute('data-task-id', task.id);
		div.setAttribute('data-priority', task.priority);
		div.setAttribute('data-completed', task.checked);

		const months = ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"];
		const date = new Date(task.dueDate);		
		const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

		div.innerHTML = `
			<div class="task-card-left">
				<input type="checkbox" class="task-checkbox" ${task.checked ? 'checked' : ''}>
				<div class="task-content">
					<h3 class="task-title">${task.title}</h3>
					<p class="task-description">${task.description}</p>
				</div>
			</div>
			<span class="task-date">
				<i class="ri-calendar-fill"></i>
				${formattedDate}
			</span>
		`;
		return div;
	}
}

export default new Render();