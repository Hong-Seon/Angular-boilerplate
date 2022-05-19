import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ROUTER_UTILS} from "../../core/utils/router.utils";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import {
  ForgotPasswordEmailSentComponent
} from "./components/forgot-password-email-sent/forgot-password-email-sent.component";
import {PasswordResetComponent} from "./components/password-reset/password-reset.component";
import {
  PasswordResetSucceededComponent
} from "./components/password-reset-succeeded/password-reset-succeeded.component";
import {PasswordResetFailedComponent} from "./components/password-reset-failed/password-reset-failed.component";

const routes: Routes = [
  {
    path: ROUTER_UTILS.config.auth.signIn,
    component: SignInComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.signUp,
    component: SignUpComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.forgotPassword,
    component: ForgotPasswordComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.forgotPasswordEmailSent,
    component: ForgotPasswordEmailSentComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordReset,
    component: PasswordResetComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordResetSucceeded,
    component: PasswordResetSucceededComponent,
  },
  {
    path: ROUTER_UTILS.config.auth.passwordResetFailed,
    component: PasswordResetFailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
