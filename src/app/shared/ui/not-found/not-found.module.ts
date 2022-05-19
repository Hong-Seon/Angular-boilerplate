import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundComponent} from "./not-found.component";
import {RouterModule} from "@angular/router";
import {ROUTER_UTILS} from "../../../core/utils/router.utils";



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ROUTER_UTILS.config.errorResponse.notFound,
        component: NotFoundComponent,
        data: {
          title: 'The page you were looking for could not be found',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class NotFoundModule { }
