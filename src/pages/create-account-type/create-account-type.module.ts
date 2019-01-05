import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccountTypePage } from './create-account-type';

@NgModule({
  declarations: [
    CreateAccountTypePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccountTypePage),
  ],
})
export class CreateAccountTypePageModule {}
