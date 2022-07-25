import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlagolJesamService {

  constructor(private httpClient: HttpClient) { }

  getQuestionJSON() {
    return this.httpClient.get<any>("assets/grammar/glagol-jesam.json");
  }
}
