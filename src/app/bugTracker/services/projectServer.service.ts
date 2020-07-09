import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectServerService {

	private baseUrl = 'http://localhost:3000/projects';

	constructor(private httpClient : HttpClient) {}

	save(projectData : Project) : Observable<Project> {
		if (projectData.id === 0) {
			return this.httpClient
				.post<Project>(this.baseUrl, projectData);
		} else {
			return this.httpClient
				.put<Project>(`${this.baseUrl}/${projectData.id}`, projectData);
		}
	}

	getAll() : Observable<Project[]> {
		return this.httpClient
			.get<Project[]>(this.baseUrl);
			
	}
	
	get(id) : Observable<Project> {
		return this.httpClient
			.get<Project>(`${this.baseUrl}/${id}`);
	}
	
	remove(projectData : Project) : Observable<any> {
		return this.httpClient
			.delete<any>(`${this.baseUrl}/${projectData.id}`);
	}
}