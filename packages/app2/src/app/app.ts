import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { UiShared } from '@monorepo-angular-21/ui-shared';

@Component({
  imports: [NxWelcome, RouterModule, UiShared],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'app2';
}
