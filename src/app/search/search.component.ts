import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  imports: [ModalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isModalVisible: boolean = false;

  openModal(): void {
    this.isModalVisible = true;  
  }
  closeModal(): void {
    this.isModalVisible = false;
  }
}
