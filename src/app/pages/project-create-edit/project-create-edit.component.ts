import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectCreateEditService } from './services/project-create-edit.service';
import { IProject } from '../../shared/interfaces/IProject';
import { environment } from '../../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from '../../shared/utils/msg';

@Component({
  selector: 'app-project-create-edit',
  templateUrl: './project-create-edit.component.html',
  styleUrls: ['./project-create-edit.component.scss']
})

export class ProjectCreateEditComponent implements OnInit {
  id: string;
  screenType: 'create' | 'edit';
  titleText: string = '';
  buttonText: string = '';
  msg = msg;

  projectCreateEditForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    totalCost: ['', Validators.required, Validators],
    description: ['', Validators.required]
  });

  constructor(private router: Router, private projectService: ProjectCreateEditService, private fb: FormBuilder) {
    this.id = history.state.id;
    this.screenType = this.id ? 'edit' : 'create';
  }

  ngOnInit(): void {
    this.setScreenTypeTexts();
    this.fillInputs();
  }

  createOrEdit() {
    if (!this.projectCreateEditForm.valid) {
      this.projectCreateEditForm.markAllAsTouched();
    }

    let payload: IProject = this.projectCreateEditForm.value;
    payload.idClient = localStorage.getItem("idClient")!;

    if (this.screenType == 'create') {
      this.projectService.postProject(payload).subscribe(
        response => {
          alert('Cadastrado com sucesso');
          this.router.navigateByUrl('list');
        }
      );
    }

    if (this.screenType == 'edit') {
      this.projectService.putProject(payload, this.id).subscribe(
        response => {
          alert('Editado com sucesso');
          this.router.navigateByUrl('list');
        }
      );
    }
  }

  fillInputs() {
    if (this.screenType === 'edit') {
      this.projectService.getProjectById(this.id).subscribe(
        (project: IProject) => {
          this.projectCreateEditForm.patchValue(project);
        }
      );
    }
  }

  setScreenTypeTexts() {
    if (this.screenType == 'create') {
      this.titleText = 'Vamos cadastrar seu novo projeto!';
      this.buttonText = 'Cadastrar';
    }

    if (this.screenType == 'edit') {
      this.titleText = 'Editar projeto';
      this.buttonText = 'Salvar';
    }
  }
}
