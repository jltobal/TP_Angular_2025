import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            CafeListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cofe_mate';
}
