import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'register',
  standalone: true,
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
  imports: [RouterOutlet,RouterModule]
})
export class nav {
onSubmit() {
throw new Error('Method not implemented.');
}
  
  constructor(private router: Router) {} 
}



 