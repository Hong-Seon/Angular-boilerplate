import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import {RouterModule, Routes} from "@angular/router";
import {ROUTER_UTILS} from "../core/utils/router.utils";
import { NotFoundComponent } from './ui/not-found/not-found.component';
import {HeaderModule} from "./ui/header/header.module";
import {FooterModule} from "./ui/footer/footer.module";
import {LayoutModule} from "./ui/layout/layout.module";
import {NotFoundModule} from "./ui/not-found/not-found.module";
import {AuthGuard} from "../core/guards/auth.guard";
import {NoAuthGuard} from "../core/guards/no-auth.guard";

const APP_ROUTES: Routes = [
  {
    path: ROUTER_UTILS.config.auth.root,
    loadChildren: async () =>
      (await import('../pages/auth/auth.module')).AuthModule,
    canLoad: [NoAuthGuard],
  },
  {
    path: ROUTER_UTILS.config.base.home,
    loadChildren: async () =>
      (await import('../pages/home/home.module')).HomeModule,
  },
  {
    path: ROUTER_UTILS.config.base.dashboard,
    loadChildren: async () =>
      (await import('../pages/dashboard/dashboard.module')).DashboardModule,
    canLoad: [AuthGuard],
  },
  {
    path: ROUTER_UTILS.config.settings.root,
    loadChildren: async () =>
      (await import('../pages/settings/settings.module')).SettingsModule,
    canLoad: [AuthGuard],
  },
  {
    path: ROUTER_UTILS.config.user.root,
    loadChildren: async () =>
      (await import('../pages/user/user.module')).UserModule,
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: async () =>
      (await import('./ui/not-found/not-found.module')).NotFoundModule,
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    HeaderModule,
    FooterModule,
    LayoutModule,
    NotFoundModule
  ],
  exports:[
    ButtonComponent,
    RouterModule,
    HeaderModule,
    FooterModule,
    LayoutModule,
    NotFoundModule
  ]
})
export class SharedModule { }
