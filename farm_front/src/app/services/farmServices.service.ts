import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class farmServices {
  constructor(private http: HttpClient) {
    // Remove the 'super' line since farmServices is not derived from any other class.
  }

  getAllFarms() {
    return this.http
      .get<any>(`http://localhost:3000/farms`)
      .pipe(catchError(this.tratarExcecao));
  }

  public tratarExcecao(error: any) {
    console.error(
      `Tipo de exceção: ${typeof error} > Corpo da exceção: ${JSON.stringify(
        error.error
      )}`
    );

    return throwError(() => error.error);
  }
}
