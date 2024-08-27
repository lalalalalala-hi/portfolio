import { Component } from '@angular/core';
import { NavfooterComponent } from '../navfooter/navfooter.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NavfooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {}
