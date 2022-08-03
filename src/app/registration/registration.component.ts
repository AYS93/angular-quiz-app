import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  public username: string = '';
  public password: string = '';
  public email: string = '';
  public userList: any = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userList = JSON.parse(localStorage.getItem("users")!);
  }

  register(regForm: any) {
    this.username = regForm.value["username"];
    this.password = regForm.value["pass"];
    this.email = regForm.value["email"];

    let obj = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    this.userList.push(obj);
    
    let jsonString = JSON.stringify(this.userList);
    localStorage.setItem("users", jsonString);
    
    alert("Налог је успешно креиран!");
    this.router.navigate(['/welcome']);
  }
}
