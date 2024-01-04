import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroFormComponent } from "./hero-form/hero-form.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,
      RouterOutlet,
      HeroFormComponent,
      FormsModule
    ]
})
export class AppComponent {
  title = 'heroForm';
}
