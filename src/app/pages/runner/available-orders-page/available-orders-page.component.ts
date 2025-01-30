import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'available-orders-page',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './available-orders-page.component.html',
  styleUrl: './available-orders-page.component.css',
})
export class AvailableOrdersPageComponent {
  orderDetails = {
    orderNumber: 'ASF6IHBIJOLKV',
    orderDate: '01 Jan 2025',
    status: 'Processing',
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
