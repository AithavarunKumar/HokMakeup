import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
    Products:any[]=[];

    constructor(private dataService:DataService){}

    ngOnInit(): void {
      this.dataService.getProducts().subscribe(
        (response) => {
            this.Products = response.products.slice(0,8);
            console.log(this.Products)
        },
        (error) => {
          console.error("Error fetching products:", error);
        }
      );
    }
    
    

}
