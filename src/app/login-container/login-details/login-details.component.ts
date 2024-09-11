import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UrlService } from '../../url.service';

@Component({
  selector: 'login-details',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDividerModule, MatButtonModule],
  templateUrl: './login-details.component.html',
  styleUrl: './login-details.component.scss'
})
export class LoginDetailsComponent {
  fb = new FormBuilder();
  router = new Router();
  private urlService: UrlService;

  constructor(urlService: UrlService) {
    this.urlService = urlService;
  }

  login(): void {
    this.router.navigateByUrl(this.urlService.dashboardUrl);
  }

}
