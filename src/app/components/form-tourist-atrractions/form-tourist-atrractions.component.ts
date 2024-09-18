import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-tourist-atrractions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-tourist-atrractions.component.html',
  styleUrl: './form-tourist-atrractions.component.scss'
})
export class FormTouristAtrractionsComponent implements OnChanges {
  @Output() onCloseModel = new EventEmitter()

  attractionForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.attractionForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('',[Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      cityId: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  onSubmit() {
    if(this.attractionForm.valid) {

    } else {
      this.attractionForm.markAsUntouched;
    }
  }

}
