import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class animalServices {
  constructor(private http: HttpClient) {
    // Remove the 'super' line since farmServices is not derived from any other class.
  }

  getAnimalsByType(type: string) {
    return this.http
      .get<any>(`http://localhost:3000/animals/type/${type}`)
      .pipe(catchError(this.tratarExcecao));
  }

  updateAnimalStatus(id: string, status: string) {
    const body = { status };
    return this.http
      .put<any>(`http://localhost:3000/animals/update-status/${id}`, body)
      .pipe(catchError(this.tratarExcecao));
  }

  getAnimalById(id: string) {
    return this.http
      .get<any>(`http://localhost:3000/animals/${id}`)
      .pipe(catchError(this.tratarExcecao));
  }

  getAllAnimals() {
    return this.http
      .get<any>(`http://localhost:3000/animals`)
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
