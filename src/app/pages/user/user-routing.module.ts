import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {OverviewComponent} from "./overview/overview.component";
import {ROUTER_UTILS} from "../../core/utils/router.utils";


const routes: Routes = [
  { path: ROUTER_UTILS.config.user.profile, component: MyProfileComponent },
  { path: ROUTER_UTILS.config.user.overview, component: OverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
