import { Component } from '@angular/core';
import { NavfooterComponent } from '../navfooter/navfooter.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-smma',
  standalone: true,
  imports: [NavfooterComponent, NgxYoutubePlayerModule],
  templateUrl: './smma.component.html',
  styleUrl: './smma.component.css',
})
export class SMMAComponent {
  player: YT.Player | any;
  id: string = 'WUjmjl0gQco';

  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }
}
