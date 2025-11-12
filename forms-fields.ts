export interface FieldConfig {
  name: string,
  label: string,
  value?: any,
  type: string,
  placeholder?: string,
  required?: boolean
}


export const SAMPLE_FORM_CONFIG: FieldConfig [] = [
    { name: 'firstName', label: 'First Name', type: 'text', value: null, placeholder: 'Enter first name', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', value: null, placeholder: 'Enter last name' , required: true},
    { name: 'dob', label: 'Date of Birth', type: 'date', value: null, required: true},
    { name: 'mobile', label: 'Mobile', type: 'tel', value: null, placeholder: 'Enter mobile number' , required: true},
    { name: 'email', label: 'Email', type: 'email', value: null, placeholder: 'Enter email' , required: true},
  ]


//   [
//     { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', validators: [Validators.required, Validators.minLength(2)] },
//     { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', validators: [Validators.required] },
//     { name: 'dob', label: 'Date of Birth', type: 'date', validators: [Validators.required] },
//     { name: 'mobile', label: 'Mobile', type: 'tel', placeholder: 'Enter mobile number', validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)] },
//     { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', validators: [Validators.required, Validators.email] },
//   ]