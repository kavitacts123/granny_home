import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';

// Custom Validator for File Input
export function fileValidator(maxSize: number, allowedTypes: string[]): Validators {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value === null || (Array.isArray(control.value) && control.value.length === 0)) {
      return { 'fileRequired': true };
    }
    if (control.value) {
      const files = control.value as File[];
      for (const file of files) {
        if (!allowedTypes.includes(file.type)) {
          return { 'fileTypeInvalid': true };
        }
        if (file.size > maxSize) {
          return { 'fileSizeExceeded': true };
        }
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      persons: this.fb.array([this.createPerson()])
    });
  }

  get personsArray(): FormArray {
    return this.personForm.get('persons') as FormArray;
  }

  createPerson(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      documents: [[], fileValidator(50 * 1024, ['image/jpeg', 'image/png'])] // 50 KB max size
    });
  }

  addPerson(): void {
    this.personsArray.push(this.createPerson());
  }

  removePerson(index: number): void {
    if (this.personsArray.length > 1) {
      this.personsArray.removeAt(index);
    }
  }

  onSelect(event: NgxDropzoneChangeEvent, index: number): void {
    const control = this.personsArray.at(index).get('documents');
    if (control) {
      const files = event.addedFiles;
      const validFiles = files.filter(file =>
        ['image/jpeg', 'image/png'].includes(file.type) && file.size <= 50 * 1024
      );
      const invalidFiles = files.filter(file =>
        !['image/jpeg', 'image/png'].includes(file.type) || file.size > 50 * 1024
      );

      if (invalidFiles.length > 0) {
        if (invalidFiles.some(file => !['image/jpeg', 'image/png'].includes(file.type))) {
          alert('Please upload only JPG or PNG images.');
        }
        if (invalidFiles.some(file => file.size > 50 * 1024)) {
          alert('File size should not exceed 50 KB.');
        }
      }

      control.setValue([...control.value, ...validFiles]);
    }
  }

  onRemove(file: File, index: number): void {
    const control = this.personsArray.at(index).get('documents');
    if (control) {
      const files = control.value as File[];
      control.setValue(files.filter(f => f !== file));
    }
  }

  onSubmit(): void {
    if (this.personForm.valid) {
      const formData = new FormData();
      this.personsArray.controls.forEach((control: AbstractControl) => {
        const person = control.value;
        formData.append('firstName[]', person.firstName);
        formData.append('lastName[]', person.lastName);
        formData.append('age[]', person.age);
        person.documents.forEach((file: File) => {
          formData.append('documents[]', file);
        });
      });

      // For demonstration purposes, log the FormData object
      console.log('Form submitted with data:', formData);

      // Navigate to the next route
      this.router.navigate(['/form2/rooms']);
    } else {
      // Mark all controls as touched to display validation messages
      this.personForm.markAllAsTouched();
    }
  }
}
