import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { ToastService } from '../toast.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent, FooterComponent, HeaderComponentComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  toastMessage$: Observable<string> = of('');

  constructor(private toastSerive: ToastService) { }

  ngOnInit() {
    this.toastMessage$ = this.toastSerive.toastMessage$
  }
}
