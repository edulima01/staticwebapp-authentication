import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";

export interface AuthenticationResponse {
  isAuthenticated: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor() { }

  public isAuthenticated(): Observable<boolean> {
    return from(fetch('/api/me', { method: 'get' })).pipe(
        switchMap(response => from(response.json())),
        tap(body => console.log(body)),
        map(body => !!body.clientPrincipal)
    );
  }
}
