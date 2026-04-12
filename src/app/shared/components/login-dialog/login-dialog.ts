import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OtpDialog } from '../otp-dialog/otp-dialog';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule],
  templateUrl: './login-dialog.html',
  styleUrl: './login-dialog.scss',
})
export class LoginDialog {
  mobileOrEmail = new FormControl('', [Validators.required]);
  submitted = false;

  constructor(
    private dialogRef: MatDialogRef<LoginDialog>,
    private dialog: MatDialog,
    private router: Router
  ) {}

  onSubmit() {
    this.submitted = true;
    if (this.mobileOrEmail.valid) {
      const otpRef = this.dialog.open(OtpDialog, {
        panelClass: 'login-dialog-container',
        backdropClass: 'login-dialog-backdrop',
        data: { mobileOrEmail: this.mobileOrEmail.value },
      });

      otpRef.afterClosed().subscribe((otp) => {
        if (otp) {
          this.dialogRef.close();
          this.router.navigate(['/appointment']);
        }
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
