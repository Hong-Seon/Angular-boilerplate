import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
