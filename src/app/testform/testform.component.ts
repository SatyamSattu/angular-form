import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  'registerForm' : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]], 
  })
  }
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}
