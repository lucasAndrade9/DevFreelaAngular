//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { msg } from '../../shared/utils/msg';
import { RegisterService } from './services/register.service';
import { IUser } from './interfaces/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  msg = msg;
  registerForm: FormGroup = this.formBuilder.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthDate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {

  }

  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
      if (radioButton.checked === false) {
        counter++;
      }
    }

    return counter !== list.length;
  }

  toggleRole(role: 'dev' | 'client') {
    this.registerForm.get('role')?.setValue(role);
  }

  cadastrar() {

    if (!this.registerForm.valid) {
      return this.registerForm.markAllAsTouched();
    }

    let payload: IUser = this.registerForm.value;
    this.registerService.postUser(payload)
      .subscribe({
        next: (response) => {
          Swal.fire({
            title: 'Bom Trabalho!',
            text: "Cadastrado com sucesso!",
            icon: 'success',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.setItem("userName", response.fullName);
              localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
              localStorage.setItem("idClient", response.id);
            }
          });
        },
        error: (error) => console.log(error)
      });

    // Enviar para API
    // fetch("https://655b6d3aab37729791a91746.mockapi.io/users", {
    //   method: 'POST',
    //   body: JSON.stringify(payload),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(response => response.json())
    //   .then(response => {
    // Swal.fire({
    //   title: 'Bom Trabalho!',
    //   text: "Cadastrado com sucesso!",
    //   icon: 'success',
    //   confirmButtonText: 'Ok!'
    // }).then((result) => {
    //       if (result.isConfirmed) {
    //         localStorage.setItem("userName", response.fullName);
    //         localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
    //         localStorage.setItem("idClient", response.id);

    //         window.location.href = "list.html";
    //       }
    //     })
    //   })
  }

  isInvalid(inputName: string, validatorName: string) {
    const input = this.registerForm.get(inputName);

    if (input?.errors !== null) {
      return input.errors[validatorName] && input.touched;
    }
  }
}
