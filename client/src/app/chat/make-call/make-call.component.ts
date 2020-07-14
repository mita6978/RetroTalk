import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-make-call',
  templateUrl: './make-call.component.html',
  styleUrls: ['./make-call.component.scss']
})
export class MakeCallComponent implements OnInit {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
