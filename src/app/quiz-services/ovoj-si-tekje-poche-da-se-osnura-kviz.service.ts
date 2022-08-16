import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OvojSiTekjePocheDaSeOsnuraKvizService {

  constructor(private httpClient: HttpClient) { }

  getQuestionJSON() {
    return this.httpClient.get<any>("assets/text/ovoj-si-tekje-poche-da-se-osnura.json");
  }

}
