import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ovoj-si-tekje-poche-da-se-osnura',
  templateUrl: './ovoj-si-tekje-poche-da-se-osnura.component.html',
  styleUrls: ['./ovoj-si-tekje-poche-da-se-osnura.component.scss']
})
export class OvojSiTekjePocheDaSeOsnuraComponent implements OnInit {

  public name: string = "";

  constructor() { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
  }

}
