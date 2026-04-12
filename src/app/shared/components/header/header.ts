import { Component, HostListener  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginDialog } from '../login-dialog/login-dialog';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatDialogModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isScrolled = false;

  constructor(private dialog: MatDialog) {}

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  openLoginDialog() {
    this.dialog.open(LoginDialog, {
      panelClass: 'login-dialog-container',
      backdropClass: 'login-dialog-backdrop',
    });
  }
}
