import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-in',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css'] // Fixed styleUrls (not styleUrl)
})
export class LoginInComponent implements OnInit{
  email:string = '';

  constructor(private router:Router){}

  onSubmit(form:any):void{
    console.log('form submitted',form.value);
    sessionStorage.setItem('user',this.email)
    this.router.navigate(['/home'])
  }
  ngOnInit() {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.pushState(null, '', location.href);
    };
  }

  
}

