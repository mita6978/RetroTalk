import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeCallComponent } from 'src/app/chat/make-call/make-call.component';
import { AnswerCallModalComponent } from './answer-call-modal/answer-call-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(AnswerCallModalComponent);
    modalRef.componentInstance.name = 'World';
  }

}


