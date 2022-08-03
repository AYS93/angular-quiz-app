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
  public points = 0;
  public userList: any = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    if(localStorage.getItem("users")) {
      this.userList = JSON.parse(localStorage.getItem("users")!);
    } else {
      let adminObj = {
        username: "admin",
        password: "PTDGadmin",
        email: "admin@admin.admin",
        points: 0
      }

      let userObj = {
        username: "Korisnik123",
        password: "Korisnik123",
        email: "korisnik123@korisnik123.korisnik",
        points: 0
      }

      this.userList.push(adminObj);
      this.userList.push(userObj);
    }
  }

  register(regForm: any) {
    this.username = regForm.value["username"];
    this.password = regForm.value["pass"];
    this.email = regForm.value["email"];

    let obj = {
      username: this.username,
      password: this.password,
      email: this.email,
      points: 0
    }
    this.userList.push(obj);
    
    let jsonString = JSON.stringify(this.userList);
    localStorage.setItem("users", jsonString);
    
    alert("Налог је успешно креиран!");
    this.router.navigate(['/welcome']);
  }
}
