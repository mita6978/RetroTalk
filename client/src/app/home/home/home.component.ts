import { ECharacters } from './../../shared/services/models/characters.enum';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerCallModalComponent } from './answer-call-modal/answer-call-modal.component';
import { AppStateService, IState, IPhoneCall } from 'src/app/shared/services/app-state.service';


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
  callingArthurImgLoaded = false;
  callingStarmanLoaded = false;

  state: IState = {
    isArthurTaken: false,
    isArthurReady: false,
    isStarmantaken: false,
    isStarmanReady: false,
    phoneCall: {
        arthurToken: null,
        starmanToken: null,
        arthurCallingStarman: false,
        starmanCallingArthur: false,
        phoneCallActive: false,
        roomsid: null,
        roomUniqueName: null
    }};

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
  @ViewChild('callingArthurImg') private callingArthurImg: ElementRef;
  @ViewChild('callingStarmanImg') private callingStarmanImg: ElementRef;


  constructor(private modalService: NgbModal, private appStateService: AppStateService) { }

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

    this.callingArthurImg.nativeElement.onload = () => {
      this.callingArthurImgLoaded = true;
    };

    this.callingStarmanImg.nativeElement.onload = () => {
      this.callingStarmanLoaded = true;
    };

    this.initMusic();
  }

  ghettoRig(): void {
    sessionStorage.setItem('refresh', 'Refresh');
    window.location.href = '/';
  }

  initMusic(): void {
    this.appStateService.state$.subscribe((state: IState) => {

      if (this.appStateService.selectedCharacter === ECharacters.ARTHUR && state.phoneCall.starmanCallingArthur === true) {
        this.phoneRingMP3.nativeElement.play();
        this.open(ECharacters.STARMAN);
      }

      if (this.appStateService.selectedCharacter === ECharacters.STARMAN  && state.phoneCall.arthurCallingStarman === true) {
        this.phoneRingMP3.nativeElement.play();
        this.open(ECharacters.ARTHUR);
      }

    });
  }


  open(characterCalling: ECharacters): void {
    const modalRef = this.modalService.open(AnswerCallModalComponent);
    modalRef.componentInstance.name = characterCalling;
    modalRef.result.then((answered: boolean) => {
      if (answered === true) {
        const phoneCall: IPhoneCall = {
          ...this.state.phoneCall,
          arthurCallingStarman: false,
          starmanCallingArthur: false,
          phoneCallActive: true
        };
        this.appStateService.phoneCall(phoneCall);
      } else {
        const phoneCall: IPhoneCall = {
          ...this.state.phoneCall,
          arthurCallingStarman: false,
          starmanCallingArthur: false,
          phoneCallActive: false
        };
        this.appStateService.phoneCall(phoneCall);
      }
      this.phoneRingMP3.nativeElement.pause();
      this.phoneRingMP3.nativeElement.currentTime = 0;
    });
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
    this.callingArthurImgLoaded === true &&
    this.callingStarmanLoaded === true &&
    this.starmanOnlineImgLoaded === true;
  }
}


