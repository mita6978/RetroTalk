import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

import { connect, createLocalTracks } from 'twilio-video';

import { IPhoneCall, IState, AppStateService, ESetCharacterState } from '../shared/services/app-state.service';
import { ECharacters } from '../shared/services/models/characters.enum';

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
  callingArthurImgLoaded = false;
  callingStarmanLoaded = false;

  hidePeerVideo = true;

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

    room: any;
    oldPeerTrack: any;

  @ViewChild('video') private video: ElementRef;
  @ViewChild('participentVideo') private participentVideo: ElementRef;

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

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event): void {
    if (this.room !== undefined && this.room.disconnect !== undefined) {
     this.room.disconnect();
    }
  }

  constructor(private appStateService: AppStateService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.appStateService.state$.subscribe((state: IState) => {

      this.state = {...this.state, ...state};

      if (this.state.phoneCall.phoneCallActive === true) {
        this.participentAnswered();
      }
    });
  }

  ngAfterViewInit(): void {
    const character = sessionStorage.getItem('character');
    if (character === ECharacters.ARTHUR) {
      this.appStateService.setSelectedCharacter(ECharacters.ARTHUR);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_TAKEN);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_READY);

    }

    if (character === ECharacters.STARMAN) {
      this.appStateService.setSelectedCharacter(ECharacters.STARMAN);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_TAKEN);
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_READY);
    }


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
  }

  pageLoaded(): void {
    this.video.nativeElement.play();
  }

  participentAnswered(): void {
        // Option 1
        createLocalTracks({
          audio: true,
          video: { width: 640 }
        }).then(localTracks => {
          const token = this.appStateService.selectedCharacter === ECharacters.ARTHUR ?
          this.state.phoneCall.arthurToken : this.state.phoneCall.starmanToken;
          return connect(token, {
            name: this.state.phoneCall.roomUniqueName,
            tracks: localTracks,
          });
        }).then(room => {
          this.room = room;
          room.participants.forEach(participant => {

            participant.on('trackSubscribed', track => {

              this.oldPeerTrack = track.attach();
              this.video.nativeElement.pause();
              this.hidePeerVideo = false;

              this.renderer.appendChild(this.participentVideo.nativeElement, track.attach());
              // this.participentVideo.nativeElement.style.width = '50%';
              const childElements = Array.from(this.participentVideo.nativeElement.children);
              for (const child of childElements) {
                if (child as HTMLElement && (child as HTMLElement).style) {
                  (child as HTMLElement).style.width = '640px';
                }
              }
            });
          });


          room.once('participantConnected', participant => {
            participant.tracks.forEach(publication => {

              if (publication.isSubscribed) {
                const track = publication.track;

                this.oldPeerTrack = track.attach();
                this.video.nativeElement.pause();
                this.hidePeerVideo = false;

                this.renderer.appendChild(this.participentVideo.nativeElement, track.attach());
                // this.participentVideo.nativeElement.style.width = '50%';
                const childElements = Array.from(this.participentVideo.nativeElement.children);
                for (const child of childElements) {
                  if (child as HTMLElement && (child as HTMLElement).style) {
                    (child as HTMLElement).style.width = '640px';
                  }
                }
              }
            });

            participant.on('trackSubscribed', track => {
              this.oldPeerTrack = track.attach();
              this.video.nativeElement.pause();
              this.hidePeerVideo = false;
              this.renderer.appendChild(this.participentVideo.nativeElement, track.attach());
              // this.participentVideo.nativeElement.style.width = '50%';
              const childElements = Array.from(this.participentVideo.nativeElement.children);
              for (const child of childElements) {
                if (child as HTMLElement && (child as HTMLElement).style) {
                  (child as HTMLElement).style.width = '640px';
                }
              }
            });

          });
          // Log Participants as they disconnect from the Room
          room.once('participantDisconnected', participant => {

            const childElements = Array.from(this.participentVideo.nativeElement.children);
            for (const child of childElements) {
              this.renderer.removeChild(this.participentVideo.nativeElement, child);
            }

            this.callEnded();
          });
        });
  }

  startCall(): void {
    const phoneCall: IPhoneCall = {
      ...this.state.phoneCall,
      arthurCallingStarman: this.appStateService.selectedCharacter === ECharacters.ARTHUR,
      starmanCallingArthur: this.appStateService.selectedCharacter === ECharacters.STARMAN,
      phoneCallActive: false
    };
    this.appStateService.phoneCall(phoneCall);

    setTimeout(() => {
      const cancelCall: IPhoneCall = {
        ...this.state.phoneCall,
        arthurCallingStarman: false,
        starmanCallingArthur: false,
      };
      this.appStateService.phoneCall(cancelCall);
    }, 30000);
  }

  hangUp(): void {
    if (this.room !== undefined && this.room.disconnect !== undefined) {
      this.room.disconnect();
      const childElements = Array.from(this.participentVideo.nativeElement.children);
      for (const child of childElements) {
        this.renderer.removeChild(this.participentVideo.nativeElement, child);
      }
      this.callEnded();
    }
  }

  callEnded(): void {
    const phoneCall: IPhoneCall = {
      arthurToken: null,
      starmanToken: null,
      arthurCallingStarman: false,
      starmanCallingArthur: false,
      phoneCallActive: false,
      roomsid: null,
      roomUniqueName: null
    };
    this.appStateService.phoneCall(phoneCall);
    this.video.nativeElement.play();
    this.hidePeerVideo = true;
  }

  get showArthurOffline(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.STARMAN && this.state.isArthurReady === false &&
    this.state.phoneCall.phoneCallActive === false;
  }

  get showArthurOnline(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.STARMAN && this.state.phoneCall.phoneCallActive === false &&
    this.state.isArthurReady === true && this.state.phoneCall.starmanCallingArthur === false;
  }

  get showCallingArthur(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.STARMAN && this.state.phoneCall.phoneCallActive === false &&
    this.state.isArthurReady === true && this.state.phoneCall.starmanCallingArthur === true;
  }

  get showStarmanOffline(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.ARTHUR && this.state.isStarmanReady === false &&
    this.state.phoneCall.phoneCallActive === false;
  }

  get showStarmanOnline(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.ARTHUR && this.state.phoneCall.phoneCallActive === false &&
    this.state.isStarmanReady === true && this.state.phoneCall.arthurCallingStarman === false;
  }

  get showCallingStarman(): boolean {
    return this.appStateService.selectedCharacter === ECharacters.ARTHUR && this.state.phoneCall.phoneCallActive === false &&
    this.state.isStarmanReady === true && this.state.phoneCall.arthurCallingStarman === true;
  }

  get disableCallButton(): boolean {
    return this.showCallingStarman === true || this.showCallingArthur === true ||
    this.showArthurOffline === true || this.showStarmanOffline === true || this.state.phoneCall.phoneCallActive === true;
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
    this.callingArthurImgLoaded === false ||
    this.callingStarmanLoaded === false ||
    this.starmanOnlineImgLoaded === false;
  }
}
