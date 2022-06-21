import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  user: User


  constructor(private loginService: LoginService, private formBuilder: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute, private toastrService: ToastrService) {


  }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  login() {

    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this.user = Object.assign({}, this.loginForm.value);
      this.loginService.login(this.user).subscribe((data) => {

        if (data.length > 0) {
          var chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var str = '';
          for (let i = 0; i < 88; i++) {
            str += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          this.activatedRoute.params.subscribe((param) => {
            if (param['returnUrl']) {
              this.router.navigateByUrl('/' + param['returnUrl']);
            } else {
              this.router.navigateByUrl('');
            }
          });
          localStorage.setItem('token', str);
          this.toastrService.info('Giriş Başarılı');
        } else {
          this.toastrService.error('Email veya parola hatalı');
        }
      });
    }
  }


}
