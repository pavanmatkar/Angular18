import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './job-application.component.html',
  styleUrl: './job-application.component.css'
})
export class JobApplicationComponent implements OnInit{
  jobForm!: FormGroup;
  availableSkills = ['Angular', 'React', 'NodeJS', 'Python', 'Java'];

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.jobForm = this.fb.group({
      personalInfo: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      education: this.fb.array([this.createEducationGroup()]),
      skills: this.fb.array([])
    });

    this.addSkillCheckboxes();
  }

  // Helper: create education FormGroup
  createEducationGroup(): FormGroup{
    return this.fb.group({
      degree: ['', Validators.required],
      institution: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  // Add new education entry
  addEducation(): void{
    this.education.push(this.createEducationGroup());
  }

  //Remove education entry
  removeEducation(index: number): void{
    this.education.removeAt(index);
  }

  // Add skill checkboxes dynamically
  addSkillCheckboxes(): void{
    this.availableSkills.forEach((skill) => {
      const skillsArray = this.jobForm.controls['skills'] as FormArray;  // use ['skills'] instead of .skills
      skillsArray.push(this.fb.control(false));
    });
  }

  // Getter for easier access
  get education(): FormArray {
    return this.jobForm.get('education') as FormArray;
  }

  get skills(): FormArray{
    return this.jobForm.get('skills') as FormArray;
  }

  //Submit form
  onSubmit(): void {
    if (this.jobForm.valid){
      const selectedSkills = this.jobForm.value.skills
        .map((checked: boolean, i: number) => (checked ? this.availableSkills[i] : null))
        .filter((v: string | null) => v != null);

        const formData = {...this.jobForm.value, skills: selectedSkills};
        console.log('Job Application Submitted:', formData);
        alert('Form submitted! Check console for JSON.');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
