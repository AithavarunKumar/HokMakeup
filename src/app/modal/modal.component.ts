import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-modal',
  standalone: true, 
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('modalInput') modalInput!: ElementRef;

  searchQuery = new Subject<string>(); 
  filteredProducts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.searchQuery.pipe(
      debounceTime(300), 
      switchMap(query => this.dataService.searchProducts(query)) 
    ).subscribe(products => {
      this.filteredProducts = products || [];
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']?.currentValue) {
      setTimeout(() => {
        this.focusInput();
      }, 0);
    }
  }

  focusInput() {
    if (this.modalInput) {
      setTimeout(() => {
        this.modalInput.nativeElement.focus();
      }, 0);
    }
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value.trim();
    this.searchQuery.next(inputValue); 
    console.log(this.searchQuery)
  }

  closeModal() {
    this.close.emit();
  }
}
