import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { LdButtonModule } from '../../shared/components/ld-button/ld-button.module';
import { LdWrapperModule } from '../../features/ld-wrapper/ld-wrapper.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LdButtonModule,
    LdWrapperModule
  ]
})

export class RegisterModule { }
