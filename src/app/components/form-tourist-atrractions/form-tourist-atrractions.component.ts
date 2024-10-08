import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TouristAttraction } from '../../shared/models/touristAttractions';
import { TouristAttractionService } from '../../services/tourist-attraction.service';
import { ToastrService } from 'ngx-toastr';
import { Cities } from '../../shared/models/cities';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-form-tourist-atrractions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-tourist-atrractions.component.html',
  styleUrl: './form-tourist-atrractions.component.scss'
})
export class FormTouristAtrractionsComponent implements OnChanges {
  [x: string]: any;
  @Output() onCloseModel = new EventEmitter()
  @Input() data: TouristAttraction | null = null

  attractionForm: FormGroup
  cities: Cities[] = []

  constructor(private fb: FormBuilder, private taService: TouristAttractionService,
    private toastr: ToastrService, private cityService: CityService) {
    this.attractionForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
      cityId: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required])
    });

    this.loadCities();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.attractionForm.patchValue(this.data);
    }

  }

  loadCities(): void {
    this.cityService.getAllCities().subscribe((data) => {
      this.cities = data;
    })
  }

  onClose() {
    this.onCloseModel.emit(false);
    this.data = null;
    this.attractionForm.reset();
  }

  onSubmit() {
    if (this.attractionForm.valid) {
      if (this.data) {
        this.taService.updateTouristAttractions(this.data.id as number, this.attractionForm.value).subscribe({
          next: () => {
            this.toastr.success("Updated Tourist Attraction!");
            this.onClose();
          }
        })
      } else {
        this.taService.createTouristAttractions(this.attractionForm.value).subscribe({
          next: () => {
            this.toastr.success("Tourist Attraction created successfully!")
            this.onClose();
          }
        })
      }

    } else {
      this.attractionForm.markAsUntouched;
    }
  }

}
