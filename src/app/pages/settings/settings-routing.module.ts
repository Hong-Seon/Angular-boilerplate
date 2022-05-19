import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AccountComponent} from "./account/account.component";
import {AppearanceComponent} from "./appearance/appearance.component";
import {BillingComponent} from "./billing/billing.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {BlockedUsersComponent} from "./blocked-users/blocked-users.component";
import {SecurityComponent} from "./security/security.component";
import {SecurityLogComponent} from "./security-log/security-log.component";
import {ROUTER_UTILS} from "../../core/utils/router.utils";

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.settings.account,
    component: AccountComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.appearance,
    component: AppearanceComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.billing,
    component: BillingComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.blockedUsers,
    component: BlockedUsersComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.notifications,
    component: NotificationsComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.security,
    component: SecurityComponent,
  },
  {
    path: ROUTER_UTILS.config.settings.securityLog,
    component: SecurityLogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
