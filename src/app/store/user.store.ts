import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {User} from '../models/user.model';
import {UserDataService} from '../services/user-data.service';
import { inject } from '@angular/core';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type BooksState = {
  users: User[];
  state: 'initial' | 'loading' | 'loaded' | 'error';
  error: Error | null;
  filter: {
    ageAtLeast: number | null;
    nameStartsWith: string | null;
  };
};

const initialState: BooksState = {
  users: [],
  state: 'initial',
  error: null,
  filter: {
    ageAtLeast: null,
    nameStartsWith: null,
  },
};

export const UsersStore = signalStore(
  withState(initialState),
  withMethods((store, userDataService = inject(UserDataService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { state: 'loading' })),
        switchMap(() => {
          return userDataService.fetchUsers(store.filter()).pipe(
            tapResponse({
              next: (users) => patchState(store, { users, state: 'loaded' }),
              error: (error: Error) => {
                patchState(store, { state: 'error', error });
              },
            })
          );
        })
      )
    ),
  }))
);
