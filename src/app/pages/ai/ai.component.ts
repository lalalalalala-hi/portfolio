import { Component } from '@angular/core';
import { NavfooterComponent } from '../navfooter/navfooter.component';

@Component({
  selector: 'app-ai',
  standalone: true,
  imports: [NavfooterComponent],
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css',
})
export class AiComponent {}
