import { Component, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-customer-services',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-services.component.html',
  styleUrl: './customer-services.component.css',
})
export class CustomerServicesComponent {
  complaintTypes = [
    'Delayed Delivery',
    'Item Not Delivered',
    'Incorrect or Damaged Item',
    'Poor Communication',
    'Refunds',
    'Fraudulent Behaviour',
  ];

  selectedComplaint: string = '';
  description: string = '';
  uploadedFileName: string = 'No file selected yet';

  // Handle File Upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadedFileName = file ? file.name : 'No file selected yet';
  }

  // Handle Form Submission
  submitComplaint() {
    if (!this.selectedComplaint) {
      alert('Please select a complaint type.');
      return;
    }

    if (!this.description.trim()) {
      alert('Please provide a description.');
      return;
    }

    alert(
      `Complaint Submitted!\nType: ${this.selectedComplaint}\nDescription: ${this.description}`
    );

    // Reset Form Fields
    this.selectedComplaint = '';
    this.description = '';
    this.uploadedFileName = 'No file selected yet';
  }
}
