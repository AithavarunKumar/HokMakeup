import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-header-component',
  imports: [SearchComponent],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  activeDropdown: string | null = null; // Tracks the active dropdown

  toggleDropdown(dropdownName: string) {
    this.activeDropdown = this.activeDropdown === dropdownName ? null : dropdownName;
  }
  constructor(private router:Router){}

  logout(){
    sessionStorage.removeItem('token'); 
    this.router.navigate(['/login']).then(() => {
      window.history.pushState(null, '', window.location.href);
    });
  }
  moveToCart(){
    this.router.navigate(['/cart']);
  }
  
}
