import { Component, OnInit } from '@angular/core';
import { IProject } from '../../shared/interfaces/IProject';
import { ListService } from './services/list.service';
import { NavigationBehaviorOptions, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit {

  constructor(private listService: ListService, private router: Router) { }

  list: IProject[] = [];
  tableIsLoaded: boolean = false;

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects().subscribe(
      (response: IProject[]) => {
        this.list = response;
        this.tableIsLoaded = true;
      }
    )
  }

  goToEdit(id: string) {
    window.location.href = `project-create-edit.html?id=${id}`;
  }

  deleteProject(id: string = '') {
    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter(project => project.id != id);
      }
    );
  }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }

  redirectToWithParams(url: string, id: string = '') {
    const dataParams: NavigationBehaviorOptions = {
      state: {
        id: id
      }
    };

    this.router.navigate([`/${url}`], dataParams);
  }

}
