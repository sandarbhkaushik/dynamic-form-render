import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FieldConfig, SAMPLE_FORM_CONFIG } from '../models/forms-fields'


@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.scss']
})
export class DynamicFormComponent implements OnInit {

  form!: FormGroup;
  fields: FieldConfig[] = SAMPLE_FORM_CONFIG;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const formGroup: any = {};
    this.fields.forEach(field => {
      const validators = [];

      if(field.required){
        validators.push(Validators.required)
      }

      if(field.type === 'email'){
        validators.push(Validators.email)
      }

      if(field.type === 'tel'){
        validators.push(Validators.pattern(/^[0-9]{10}$/));
      }

      formGroup[field.name as string] = new FormControl(
        field.value || '',
        validators
      );
    });
    this.form = this.fb.group(formGroup);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      alert('form submitted');
    } else {
      this.form.markAllAsTouched();
    }
  }
  
}
