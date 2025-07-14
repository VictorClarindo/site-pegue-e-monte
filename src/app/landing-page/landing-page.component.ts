import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor() { }

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log('Form Submitted!', form.value);
  //     // Here you would typically send the form data to a backend service
  //     // For example: this.http.post('your-api-endpoint', form.value).subscribe(...)
  //     alert('Thank you for your message! We will get back to you soon.');
  //     form.reset();
  //   }
  // }
}