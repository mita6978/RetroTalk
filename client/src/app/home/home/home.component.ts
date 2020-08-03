import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerCallModalComponent } from './answer-call-modal/answer-call-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  chatOrbLoaded = false;
  aboutOrbLoaded = false;
  codeOrbLoaded = false;
  blankVideoBGLoaded = false;
  phoneCallVidLoaded = false;
  phoneRingMP3Loaded = false;
  arthurOfflineImgLoaded = false;
  arthurOnlineImgLoaded = false;
  arthurCallingImgLoaded = false;
  starmanOnlineImgLoaded = false;
  starmanOfflineImgLoaded = false;
  starmanCallingImgLoaded = false;

  @ViewChild('chatOrb') private chatOrb: ElementRef;
  @ViewChild('aboutOrb') private aboutOrb: ElementRef;
  @ViewChild('codeOrb') private codeOrb: ElementRef;

  @ViewChild('blankVideoBG') private blankVideoBG: ElementRef;
  @ViewChild('phoneCallVid') private phoneCallVid: ElementRef;
  @ViewChild('phoneRingMP3') private phoneRingMP3: ElementRef;
  @ViewChild('arthurOfflineImg') private arthurOfflineImg: ElementRef;
  @ViewChild('arthurOnlineImg') private arthurOnlineImg: ElementRef;
  @ViewChild('arthurCallingImg') private arthurCallingImg: ElementRef;
  @ViewChild('starmanOnlineImg') private starmanOnlineImg: ElementRef;
  @ViewChild('starmanOfflineImg') private starmanOfflineImg: ElementRef;
  @ViewChild('starmanCallingImg') private starmanCallingImg: ElementRef;


  constructor(private modalService: NgbModal) { }

  ngAfterViewInit(): void {
    this.chatOrb.nativeElement.onload = () => {
      this.chatOrbLoaded = true;
    };

    this.aboutOrb.nativeElement.onload = () => {
      this.aboutOrbLoaded = true;
    };

    this.codeOrb.nativeElement.onload = () => {
      this.codeOrbLoaded = true;
    };

    this.blankVideoBG.nativeElement.onload = () => {
      this.blankVideoBGLoaded = true;
    };

    this.phoneCallVid.nativeElement.onloadeddata = () => {
        this.phoneCallVidLoaded = true;
    };

    this.phoneRingMP3.nativeElement.onloadeddata = () => {
      this.phoneRingMP3Loaded = true;
    };

    this.arthurOfflineImg.nativeElement.onload = () => {
      this.arthurOfflineImgLoaded = true;
    };

    this.arthurOnlineImg.nativeElement.onload = () => {
      this.arthurOnlineImgLoaded = true;
    };

    this.arthurCallingImg.nativeElement.onload = () => {
      this.arthurCallingImgLoaded = true;
    };

    this.starmanOnlineImg.nativeElement.onload = () => {
      this.starmanOnlineImgLoaded = true;
    };

    this.starmanOfflineImg.nativeElement.onload = () => {
      this.starmanOfflineImgLoaded = true;
    };

    this.starmanCallingImg.nativeElement.onload = () => {
      this.starmanCallingImgLoaded = true;
    };
  }



  open() {
    const modalRef = this.modalService.open(AnswerCallModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  get showMenu(): boolean {
    return this.chatOrbLoaded === true &&
    this.aboutOrbLoaded === true &&
    this.codeOrbLoaded === true &&
    this.blankVideoBGLoaded === true &&
    this.phoneCallVidLoaded === true &&
    this.phoneRingMP3Loaded === true &&
    this.arthurOfflineImgLoaded === true &&
    this.arthurOnlineImgLoaded === true &&
    this.arthurCallingImgLoaded === true &&
    this.starmanOfflineImgLoaded === true &&
    this.starmanCallingImgLoaded === true &&
    this.starmanOnlineImgLoaded === true;
  }
}


