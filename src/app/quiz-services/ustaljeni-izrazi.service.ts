import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UstaljeniIzraziService {

  constructor(private httpClient: HttpClient) { }

  getQuestionJSON() {
    return this.httpClient.get<any>("assets/vocab/ustaljeni-izrazi.json");
  }
}
