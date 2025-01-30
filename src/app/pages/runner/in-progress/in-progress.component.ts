import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'in-progress',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './in-progress.component.html',
  styleUrl: './in-progress.component.css',
})
export class InProgressComponent {
  orderDetails = {
    orderNumber: 'ASF6IHBIJOLKV',
    orderDate: '01 Jan 2025',
    status: 'In Progress',
    shipTo: 'Qunice Auckland Park',
    amount: 900,
    refund: 400,
    total: 500,
    shipOrder: true,
  };

  orderItems = [
    {
      name: 'Flower Dress',
      category: 'Dress',
      quantity: 2,
      price: 200,
      shipped: true,
      image: 'https://via.placeholder.com/60',
    },
    {
      name: 'White Bowl',
      category: 'Bowl',
      quantity: 4,
      price: 150,
      shipped: true,
      image: 'https://via.placeholder.com/60',
    },
    {
      name: 'Black Sharpnose Shoes',
      category: 'Shoes',
      quantity: 1,
      price: 400,
      shipped: false,
      image: 'https://via.placeholder.com/60',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  completeOrder(): void {
    console.log('Order completed:', this.orderDetails);
  }

  cancelOrder(): void {
    console.log('Order canceled');
  }
}
