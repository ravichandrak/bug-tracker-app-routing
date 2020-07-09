import { Component, Output, EventEmitter} from '@angular/core';
import { ProjectOperationsService } from '../../services/projectOperations.services';
import { Project } from '../../models/Project';
import { Router } from '@angular/router';

@Component({
	selector : 'app-product-edit',
	template : `
		<section class="edit">
			<label for="">Project Name :</label>
			<input type="text" [(ngModel)]="newProjectName">
			<span> [ {{newProjectName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewProjectClick()">
		</section>
		<p><a [routerLink]="['/bugs']">Home</a></p>
	`
})

export class ProjectEditComponent {

    newProjectName : string = '';

    constructor(private ProjectOperations : ProjectOperationsService,
		private router : Router){

    }
    
    onAddNewProjectClick() {
        
        this.ProjectOperations
			.createNew(this.newProjectName)
			.subscribe(newProject => {
				this.router.navigate(['projects']);	
			});

    }
}