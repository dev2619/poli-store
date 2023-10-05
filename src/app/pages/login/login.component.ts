import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) { }
  loginForm = this.fb.group({
    email: ['ana@polistore.com', Validators.required],
    password: ['password', Validators.required],
  });

  invalidUser: boolean = false;

  authenticateUser(): void {
    const formValue = this.loginForm.value;
    let user = formValue.email! != '' ? formValue.email! : '';
    let pwd = formValue.password! != '' ? formValue.password! : '';
    this.userService.getUser(user, pwd).subscribe((res) => {
      console.log("🚀 ~ file: login.component.ts:21 ~ LoginComponent ~ this.userService.getUser ~ res:", res);
      if (res != undefined) {
        this.router.navigate(['dashboard']);
        this.invalidUser = false;
      } else {
        this.invalidUser = true;
      }
    });
  }

}
