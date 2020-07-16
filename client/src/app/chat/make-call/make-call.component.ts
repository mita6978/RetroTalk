import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-call',
  templateUrl: './make-call.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./make-call.component.scss']
})
export class MakeCallComponent implements OnInit {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}


  ngOnInit(): void {
    console.log('I ran');
  }

}
