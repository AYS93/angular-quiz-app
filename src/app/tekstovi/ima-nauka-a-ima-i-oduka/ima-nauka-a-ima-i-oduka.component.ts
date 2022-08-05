import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ima-nauka-a-ima-i-oduka',
  templateUrl: './ima-nauka-a-ima-i-oduka.component.html',
  styleUrls: ['./ima-nauka-a-ima-i-oduka.component.scss']
})
export class ImaNaukaAImaIOdukaComponent implements OnInit {

  public name: string = "";

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
  }

}
