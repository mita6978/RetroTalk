import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MakeCallComponent } from './make-call/make-call.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewInit {
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

  @ViewChild('video') private video: ElementRef;

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

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

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

  pageLoaded(): void {
    this.video.nativeElement.play();
  }


  open(): void {
    const modalRef = this.modalService.open(MakeCallComponent);
    modalRef.componentInstance.name = 'World';
  }

  get showLoader(): boolean {
    return this.chatOrbLoaded === false ||
    this.aboutOrbLoaded === false ||
    this.codeOrbLoaded === false ||
    this.blankVideoBGLoaded === false ||
    this.phoneCallVidLoaded === false ||
    this.phoneRingMP3Loaded === false ||
    this.arthurOfflineImgLoaded === false ||
    this.arthurOnlineImgLoaded === false ||
    this.arthurCallingImgLoaded === false ||
    this.starmanOfflineImgLoaded === false ||
    this.starmanOnlineImgLoaded === false;
  }
}
