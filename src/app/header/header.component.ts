import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginComponent } from './../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bsModalRef: BsModalRef;
  responsiveMenu = false;
  config = {
    animated: true,
    keyboard: true
  };
  constructor(private modalService: BsModalService) { }

  openSignUpModal() {
    console.log('here');
    console.log(this.modalService);
    console.log(this.bsModalRef);
    this.bsModalRef = this.modalService.show(LoginComponent, this.config);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
  }

  openMenu() {
      this.responsiveMenu = !this.responsiveMenu;
  }

}
