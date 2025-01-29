import { Injectable } from '@angular/core';
import { ForgotPasswordComponent } from '../pages/buyer/forgot-password/forgot-password.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  openForgotPasswordModal() {
    this.modalService.open(ForgotPasswordComponent);
  }
}
