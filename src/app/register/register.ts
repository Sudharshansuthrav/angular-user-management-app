import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterModule } from '@angular/router';
import path from 'path';


@Component({
  selector: 'register',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
onSubmit() {
throw new Error('Method not implemented.');
}
onSave() {
throw new Error('Method not implemented.');
}
registerForm: any;
}
