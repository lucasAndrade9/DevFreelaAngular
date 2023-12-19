import { Component, OnInit } from '@angular/core';
import { IListItem } from './interfaces/IListItem';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  list: IListItem[] = [];
  tableIsLoaded: boolean = false;

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.listService.getProjects().subscribe(
      (response: IListItem[]) => {
        this.list = response;
        this.tableIsLoaded = true;
      }
    )
  }

  goToEdit(id: string) {
    window.location.href = `project-create-edit.html?id=${id}`;
  }

  deleteProject(id: string) {
    this.listService.deleteProject(id).subscribe(
      (response) => {
        this.list = this.list.filter(project => project.id != id);
      }
    );
  }

}
