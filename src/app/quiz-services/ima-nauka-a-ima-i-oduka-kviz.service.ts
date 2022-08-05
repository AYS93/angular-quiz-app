import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImaNaukaAImaIOdukaKvizService {

  constructor(private httpClient: HttpClient) { }

  getQuestionJSON() {
    return this.httpClient.get<any>("assets/text/ima-nauka-a-ima-i-oduka.json");
  }
  
}
