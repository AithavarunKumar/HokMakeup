import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css'] // Fixed styleUrls (not styleUrl)
})
export class LoginInComponent implements OnInit{
  email: string = '';
  otp: string = '';
  token: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  // Send OTP to the email
  sendOtp(): void {
    if (!this.email) {
      console.error('Email is required');
      return;
    }

    this.http
      .post('http://localhost:3000/api/auth/send-otp', { email: this.email })
      .subscribe(
        (response) => {
          console.log('OTP sent successfully');
        },
        (error) => {
          console.error('Error sending OTP', error);
        }
      );
  }

  verifyOtp(): void {
    if (!this.email || !this.otp) {
      console.error('Both email and OTP are required');
      return;
    }
  
    console.log('Email:', this.email);
    console.log('OTP:', this.otp);
  
    this.http
      .post('http://localhost:3000/api/auth/verify-otp', { email: this.email, otp: this.otp })
      .subscribe(
        (response: any) => {
          console.log('OTP verified', response);
          this.token = response.token;
  
          if (this.token) {
            sessionStorage.setItem('token', this.token);
            this.router.navigate(['/home']); // Redirect after successful authentication
          } else {
            console.error('Error: Token is null');
          }
          
        },
        (error) => {
          console.error('Error verifying OTP', error);
        }
      );
  }
  
  

  // Called when the form is submitted
  onSubmit(form: any): void {
    console.log('Form submitted', form.value);
    this.sendOtp();
  }
  
}

