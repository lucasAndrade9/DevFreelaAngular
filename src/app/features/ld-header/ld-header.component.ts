import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'ld-header',
  templateUrl: './ld-header.component.html',
  styleUrl: './ld-header.component.scss'
})

export class LdHeaderComponent implements OnInit {

  user: IUser = {};

  constructor() {}

  ngOnInit(): void {
    this.buildHeader();
  }

  buildHeader() {
    if (this.checkIfUserIsLogged()) {
      //this.user.name = localStorage.getItem("userName") || '';
      //this.user.role = localStorage.getItem("role") || '';
    }
  }

  checkIfUserIsLogged(): boolean {
    return true;
    //return localStorage.getItem("userName") !== null && localStorage.getItem("role") !== null;
  }
}
