import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'help-desk',
  standalone: true,
  imports: [NgIf, NgFor,FormsModule],
  templateUrl: './help-desk.component.html',
  styleUrl: './help-desk.component.css',
})
export class HelpDeskComponent {
  selectedTab: number = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }

  isContentVisible = false;

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }

  faqs = [
    {
      question: 'How to track my Order?',
      answer:
        "You can easily track your order's delivery status. Once your order is shipped, you’ll receive a tracking number along with a link to track your delivery in real-time. You can check the status anytime through your account or directly on the courier's website.",
      isOpen: false,
    },
    {
      question: 'Is there a return policy?',
      answer:
        'Yes, we have a return policy. You can return items within 30 days of delivery. The item must be unused and in its original packaging. Please visit our return policy page for more details.',
      isOpen: false,
    },
    {
      question: 'How do I contact customer support?',
      answer:
        "You can contact our customer support through the 'Contact Us' page, via email at support@example.com, or call us at (123) 456-7890. Our support team is available 24/7.",
      isOpen: false,
    },
    {
      question: 'What payment methods are accepted?',
      answer:
        'We accept credit/debit cards, PayPal, Apple Pay, Google Pay, and other popular payment methods. More details can be found at checkout.',
      isOpen: false,
    },
    {
      question: 'How do I review the Runner?',
      answer:
        'Once your order is delivered, you will receive a notification to rate and review the Runner. You can also go to your order history and leave a review manually.',
      isOpen: false,
    },
    {
      question: 'How to become a Runner?',
      answer:
        'To become a Runner, sign up on our platform, submit the required documents, and complete the verification process. Once approved, you can start delivering orders and earning money.',
      isOpen: false,
    },
  ];

  //function to toggle FAQ
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  // Customer Service Section
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
