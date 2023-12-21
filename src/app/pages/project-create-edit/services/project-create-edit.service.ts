import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { IProject } from '../../../shared/interfaces/IProject';

@Injectable({
  providedIn: 'root'
})

export class ProjectCreateEditService {

  constructor(private http: HttpClient) { }

  postProject(project: IProject) {
    return this.http.post(`${environment.apiUrl}/projects`, project);
  }

  putProject(project: IProject, id: string) {
    return this.http.post(`${environment.apiUrl}/projects/${id}`, project);
  }

  getProjectById(id: string) {
    return this.http.get<IProject>(`${environment.apiUrl}/projects/${id}`);
  }
}
