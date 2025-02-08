import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import {UserDataService} from './services/user-data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {JsonPipe} from '@angular/common';
import {UsersStore} from './store/user.store';

@Component({
  selector: 'app-root',
  imports: [JsonPipe],
  providers: [UsersStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  protected readonly store = inject(UsersStore);

  public constructor() {
    effect(() => {
      this.store.load();
    });
  }
}
