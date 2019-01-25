import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { PropertyResourceService } from '../../services/property-api/property-resource.service';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthLoginData } from '../auth';
import { User } from '../user';
import { LoginServiceService } from '../../services/login-service/login-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  authform: FormGroup;
  // userData: User;
  // loginForm: FormGroup;
  authLoginSub: any;
  loginErrors: any;
  tokenExists = false;
  didLogin = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dbservice: PropertyResourceService,
    private fb: FormBuilder,
    private loginservice: LoginServiceService
  ) { }

  ngOnInit() {
    this.tokenExists = this.loginservice.checkToken();
    const username = this.loginservice.getUsername();
    this.authform = this.fb.group({
      username: new FormControl(),
      password: new FormControl(),
    });
    // this.TokenExists();
  }

  goToSignUp() {
    this.router.navigate(['../sign-up'], {relativeTo: this.route});
  }

  login(formData, loginForm) {
    this.authLoginSub = this.loginservice.login(formData)
    .subscribe((data) => {
      loginForm.resetForm({});
      this.loginErrors = null;
      console.log(data);
      this.loginservice.handleRoles();
     }, error => {
      this.loginErrors = 'Incorrect Username or password';
     });
  }

  handleSubmit(event: any, ourLoginDir: NgForm, loginFormGroup: FormGroup) {
    event.preventDefault();
    if (ourLoginDir.submitted) {
        // interact with the server
        const authLoginData = new AuthLoginData(
            loginFormGroup.value['username'],
            loginFormGroup.value['password']
            );
        this.login(authLoginData, ourLoginDir);
    }
}


Logout() {
  this.loginservice.logout();
}

TokenExists () {
  if (this.tokenExists) {
    this.router.navigate (['/account']);
  }
}

  ngOnDestroy() {
    if (this.authLoginSub) {
      this.authLoginSub.unsubscribe();
    }
  }

}
