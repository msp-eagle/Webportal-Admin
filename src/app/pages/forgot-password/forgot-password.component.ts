import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginservice/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private api: LoginService, private router: Router, private fb: FormBuilder) { }

  emailDiv: boolean = true;
  otpDiv: boolean = false;
  changePasswordDiv: boolean = false;
  email: string = "";
  otp: any;

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 6,
    isPasswordInput: true,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '35px',
      'height': '35px'
    }
  };

  reactiveform: FormGroup;
  ngOnInit(): void {

    this.reactiveFormMethod()

  }

  reactiveFormMethod() {
    this.reactiveform = this.fb.group({
      newPassword: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,}$/)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{6,}$/)]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    // Check if both fields have values and are equal
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null; // Validation passed
  }

  otpGenerate() {
    console.log(this.email)
    if (this.email == "" || this.email == null) {

    }
    else {
      const email = {
        key: this.email
      }
      this.api.forgotPasswordOtpGenerate(email).subscribe((res) => {
        console.log(res)
        if (res.status == "SUCCESS") {
          this.emailDiv = false;
          this.otpDiv = true;
        }
        else {
          Swal.fire({
            icon: 'error',  // The icon type ('error', 'success', 'warning', 'info', etc.)
            title: 'Error',
            text: res.status,
          });
        }
      })
    }
  }

  onOtpChange(otp) {
    this.otp = otp;
  }
  onKeyPress(event: KeyboardEvent) {
    const inputChar = event.key;
    const numbersOnlyRegex = /^[0-9]$/;
    if (!numbersOnlyRegex.test(inputChar)) {
      event.preventDefault();
    }
  }

  otpValidate() {
    
    console.log(this.otp)
    if (this.otp.length == 6) {
      this.api.forgotPasswordOtpValidate(this.otp, this.email).subscribe((res) => {
        console.log(res)
        if (res.status == "SUCCESS") {
          this.otpDiv = false;
          this.changePasswordDiv = true;
        }
        else {
          this.ngOtpInput.setValue([]);
          Swal.fire({
            icon: 'error',  // The icon type ('error', 'success', 'warning', 'info', etc.)
            title: 'Error',
            text: res.status,
          });
        }
      })
    }
  }

  hide = true; // Initially, the password is hidden

  toggleHide() {
    this.hide = !this.hide;
  }

  changePassword() {
    
    console.log(this.reactiveform.value)
    if (this.reactiveform.valid) {
      const password = {
        password: this.reactiveform.get('newPassword').value,
        email: this.email
      }
      this.api.passwordChange(password).subscribe((res) => {
        if (res.status == "SUCCESS") {
          Swal.fire({
            icon: 'success',  // The icon type ('error', 'success', 'warning', 'info', etc.)
            title: 'Password changed successfully',
            text: "Login with new password",
          });
          this.router.navigate(['/'])
        }
        else {
          Swal.fire({
            icon: 'error',  // The icon type ('error', 'success', 'warning', 'info', etc.)
            title: 'Error',
            text: res.status,
          });
        }
      })
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "Password and Confirm Password does not match",
      });
    }
  }
}
