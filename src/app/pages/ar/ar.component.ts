import { Component } from '@angular/core';
import { NavfooterComponent } from '../navfooter/navfooter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-ar',
  standalone: true,
  imports: [
    NavfooterComponent,
    NgxYoutubePlayerModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './ar.component.html',
  styleUrl: './ar.component.css',
})
export class ArComponent {
  player: YT.Player | any;
  id: string = 'z8a6y2IUeVI';
  id2: string = 'GYXcZnZcTAc';

  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }
}
