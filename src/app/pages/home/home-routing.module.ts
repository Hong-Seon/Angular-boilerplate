import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home',
      description:
        'Angular starter for enterprise-grade front-end projects, built under a clean architecture that helps to scale and maintain a fast workflow.',
      robots: 'index, follow',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
