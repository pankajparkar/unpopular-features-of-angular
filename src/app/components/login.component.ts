import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  template: `
    <h1 mat-dialog-title>Login</h1>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Username</mat-label>
        <input matInput >
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Password</mat-label>
        <input matInput type="password">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-raised-button mat-dialog-close (click)="login()">Login</button>
      <button mat-raised-button mat-dialog-close cdkFocusInitial>Close</button>
    </div>
  `,
  styles: [
  ]
})
export class LoginDialog {
  login() { }
}

@Component({
  selector: 'uf-login',
  standalone: true,
  imports: [MatDialogModule],
  template: `
  `,
  styles: [
  ]
})
export class LoginComponent {
  router = inject(Router);
  ref = inject(MatDialog).open(LoginDialog)
    .afterClosed().subscribe(() => {
      this.router.navigate([{ outlets: { modal: null } }])
    });
}
