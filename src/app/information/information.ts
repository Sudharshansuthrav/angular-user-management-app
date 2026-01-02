import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'register',
  standalone: true,
  templateUrl: './information.html',
  styleUrls: ['./information.css'],
  imports: [RouterOutlet,RouterModule]
})


export class information {
information: any;
  constructor(private router: Router) {} 
onClickMe() {
throw new Error('Method not implemented.');
}
  username: string = '';
  password: string = '';

  onSubmit() {
    // Implement your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add authentication logic and navigate to the next page upon successful login

  }
}




