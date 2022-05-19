import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { BillingComponent } from './billing/billing.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { SecurityComponent } from './security/security.component';
import { SecurityLogComponent } from './security-log/security-log.component';



@NgModule({
  declarations: [
    AccountComponent,
    AppearanceComponent,
    BillingComponent,
    NotificationsComponent,
    BlockedUsersComponent,
    SecurityComponent,
    SecurityLogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
