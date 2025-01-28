import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { ModalService } from '../../../services/modal.service'; 

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterLink, ForgotPasswordComponent],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {

  // constructor(private modalService: ModalService) { }

  // openForgotPasswordModal() {
  //   this.modalService.openForgotPasswordModal();  // Open the modal via the service
  // }

}
