import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-details-page.component.html',
  styleUrl: './order-details-page.component.css'
})
export class OrderDetailsPageComponent {

  
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }
}
