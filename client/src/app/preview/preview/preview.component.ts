import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService, ESetCharacterState } from 'src/app/shared/services/app-state.service';
import { ECharacters } from 'src/app/shared/services/models/characters.enum';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements AfterViewInit {
  nextButtonDisabled = true;

  @ViewChild('video') private video: ElementRef;

  constructor(private router: Router, private appStateService: AppStateService) { }

  ngAfterViewInit(): void {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true  })
        .then((stream) => {
          if ('srcObject' in this.video.nativeElement) {
            this.video.nativeElement.srcObject = stream;
            this.nextButtonDisabled = false;
          } else {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.nextButtonDisabled = false;
          }
          this.video.nativeElement.play();
        })
        .catch(() => {
          console.log('Camera Failed To Load');
        });
    }
  }

  startChatting(): void {

    if (this.appStateService.selectedCharacter === ECharacters.ARTHUR) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.ARTHUR_READY);
    }

    if (this.appStateService.selectedCharacter === ECharacters.STARMAN) {
      this.appStateService.toggleCharacterTaken(ESetCharacterState.STARMAN_READY);
    }

    sessionStorage.setItem('character', this.appStateService.selectedCharacter);

    this.router.navigate(['/home']);
  }

}
