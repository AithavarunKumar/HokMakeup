import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponentComponent } from '../header-component/header-component.component';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent,FooterComponent,HeaderComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
