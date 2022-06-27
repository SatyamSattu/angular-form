import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareserviceService } from '../shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-reactive',
  templateUrl: './test-reactive.component.html',
  styleUrls: ['./test-reactive.component.scss']
})
export class TestReactiveComponent implements OnInit {
  registerForm!: FormGroup;
  submitted :boolean= false;
  employeeData!: any;

  constructor(private formBuilder: FormBuilder, private api:ShareserviceService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  


get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted =true;
  if (!this.registerForm.invalid) {
   this.api.postData(this.registerForm.value).subscribe(res=>{
    console.log(res)
    this.router.navigate(['/user-listing'])
    alert("submitted successfully")
   });
   } 
  }
 
}
