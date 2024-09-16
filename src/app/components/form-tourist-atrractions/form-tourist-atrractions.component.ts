import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-tourist-atrractions',
  standalone: true,
  imports: [],
  templateUrl: './form-tourist-atrractions.component.html',
  styleUrl: './form-tourist-atrractions.component.scss'
})
export class FormTouristAtrractionsComponent implements OnChanges {
  @Output() onCloseModel = new EventEmitter()

  attractionForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.attractionForm = this.fb.group({})
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  onClose() {
    this.onCloseModel.emit(false);
  }

}
