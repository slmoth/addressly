import { Component } from '@angular/core';
import { LoginDetailsComponent } from "./login-details/login-details.component";

@Component({
  selector: 'login-container',
  standalone: true,
  imports: [LoginDetailsComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {

}
