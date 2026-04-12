import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './otp-dialog.html',
  styleUrl: './otp-dialog.scss',
})
export class OtpDialog {
  otpValues: string[] = ['', '', '', ''];
  submitted = false;

  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  constructor(
    private dialogRef: MatDialogRef<OtpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { mobileOrEmail: string }
  ) {}

  onOtpInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (!/^\d*$/.test(value)) {
      input.value = '';
      this.otpValues[index] = '';
      return;
    }

    this.otpValues[index] = value;

    if (value && index < 3) {
      const inputs = this.otpInputs.toArray();
      inputs[index + 1].nativeElement.focus();
    }
  }

  onOtpKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otpValues[index] && index > 0) {
      const inputs = this.otpInputs.toArray();
      inputs[index - 1].nativeElement.focus();
    }
  }

  onOtpPaste(event: ClipboardEvent) {
    event.preventDefault();
    const paste = event.clipboardData?.getData('text') || '';
    const digits = paste.replace(/\D/g, '').slice(0, 4);
    const inputs = this.otpInputs.toArray();

    for (let i = 0; i < digits.length; i++) {
      this.otpValues[i] = digits[i];
      inputs[i].nativeElement.value = digits[i];
    }

    if (digits.length > 0) {
      const focusIndex = Math.min(digits.length, 3);
      inputs[focusIndex].nativeElement.focus();
    }
  }

  onSubmit() {
    this.submitted = true;
    const otp = this.otpValues.join('');
    if (otp.length === 4) {
      this.dialogRef.close(otp);
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
