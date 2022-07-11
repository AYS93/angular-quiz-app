import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlogo-s6m-se-muchila',
  templateUrl: './mlogo-s6m-se-muchila.component.html',
  styleUrls: ['./mlogo-s6m-se-muchila.component.scss']
})
export class MlogoS6mSeMuchilaComponent implements OnInit {

  public name: string = "";

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
  }

}
