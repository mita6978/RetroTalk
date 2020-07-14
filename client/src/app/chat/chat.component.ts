import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeCallComponent } from './make-call/make-call.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }


  open() {
    const modalRef = this.modalService.open(MakeCallComponent);
    modalRef.componentInstance.name = 'World';
  }
}
