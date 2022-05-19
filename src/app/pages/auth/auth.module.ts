import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { PasswordResetSucceededComponent } from './components/password-reset-succeeded/password-reset-succeeded.component';
import { PasswordResetFailedComponent } from './components/password-reset-failed/password-reset-failed.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordEmailSentComponent } from './components/forgot-password-email-sent/forgot-password-email-sent.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    PasswordResetSucceededComponent,
    PasswordResetFailedComponent,
    PasswordResetComponent,
    ForgotPasswordComponent,
    ForgotPasswordEmailSentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
