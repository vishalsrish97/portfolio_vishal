import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  data = PORTFOLIO;

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = signal(false);

  handleSubmit(): void {
    this.submitted.set(true);
    this.form = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => this.submitted.set(false), 3500);
  }
}
