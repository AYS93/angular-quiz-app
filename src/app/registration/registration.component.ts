import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public username: string = '';
  public password: string = '';
  public email: string = '';
  public userList: any = [];
  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsersJSON().subscribe(res => {
      this.userList = res.users;
    });
  }

  register(regForm: any) {
    //console.log(regForm.value);

    this.username = regForm.value["username"];
    this.password = regForm.value["pass"];
    this.email = regForm.value["email"];

    let obj = {
      username: this.username,
      password: this.password,
      email: this.email
    }
    this.userList.push(obj);
    //console.log(this.userList);

    let users = {
      "users": this.userList
    };

    let jsonString = JSON.stringify(users);
    console.log("DEVELOPER INSTRUCTIONS: CTRL+C THIS TO assets/uesrs/users.json, SAVE THE CHANGES AND REFRESH THE PAGE!")
    console.log(jsonString);
    
    alert("Налог је успешно креиран!");
    this.router.navigate(['/welcome']);
  }
}
