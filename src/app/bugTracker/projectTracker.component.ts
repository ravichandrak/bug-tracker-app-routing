import { Component, OnInit } from '@angular/core';
import { Project } from './models/Project';
import { ProjectOperationsService } from './services/projectOperations.services';

@Component({
	selector : 'app-project-tracker',
	templateUrl : 'projectTracker.component.html'
})

export class ProjectTrackerComponent {

    projects : Project[] = [];

    constructor(private projectOperations : ProjectOperationsService) {}

    ngOnInit() {		
		this.loadProjects();
	}

	loadProjects() {

        this.projectOperations
			.getAll()
			.subscribe(projects => this.projects = projects);
    }

	onNewProjectCreated(newProject) {
		this.projects = [...this.projects, newProject];
	}
	
	onRemoveProjectClick(projectToRemove:Project) {

        if(confirm("Do you really want to delete?")) {

            this.projectOperations.remove(projectToRemove)
                .subscribe(() => this.loadProjects());

        }
	}
}