import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.components.html',
  styleUrls: ['./contact.components.css']
})
export class ContactComponents {

  name = '';
  email = '';
  phone = '';
  message = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    const payload = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    };

    this.http.post('http://localhost:3000/send-email', payload)
      .subscribe({
        next: () => alert('Message sent!'),
        error: () => alert('Error sending message')
      });
  }
}
