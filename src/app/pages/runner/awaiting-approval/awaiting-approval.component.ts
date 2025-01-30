import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'awaiting-approval',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './awaiting-approval.component.html',
  styleUrl: './awaiting-approval.component.css',
})
export class AwaitingApprovalComponent {
  rejectionReason: string = '';

  orderDetails = {
    orderNumber: 'ASF6IHBIJOLKV',
    orderDate: '01 Jan 2025',
    status: 'Pending',
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

  approveOrder(): void {
    console.log('Order completed:', this.orderDetails);
  }

  rejectOrder(): void {
    console.log('Order canceled');
  }
}
