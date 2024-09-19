import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../../shared/ui/model/model/model.component';
import { FormTouristAtrractionsComponent } from '../../components/form-tourist-atrractions/form-tourist-atrractions.component';
import { TouristAttraction } from '../../shared/models/touristAttractions';
import { TouristAttractionService } from '../../services/tourist-attraction.service';
import { ToastrService } from 'ngx-toastr';
import { Cities } from '../../shared/models/cities';
import { CityService } from '../../services/city.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tourist-attractions',
  standalone: true,
  imports: [ModelComponent, FormTouristAtrractionsComponent, CommonModule],
  templateUrl: './tourist-attractions.component.html',
  styleUrl: './tourist-attractions.component.scss'
})
export class TouristAttractionsComponent implements OnInit {
  isModelOpen = false;

  touristAttractions: TouristAttraction[] = [];

  touristAttraction!: TouristAttraction;

  cities: Cities[] = [];

  city!: Cities;

  constructor(private taService: TouristAttractionService, private cityService: CityService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllToursistAttraction();
    this.loadCities();
  }

  getAllToursistAttraction() {
    this.taService.getTouristAttractions().subscribe({
      next: (response) => {
        this.touristAttractions = response
      }
    })
  }


  deleteToursistAttraction(id?: number) {
    this.taService.deleteTouristAttractions(id).subscribe({
      next: () => {
        this.toastr.success("Tourist attraction successfully deleted!")
        this.getAllToursistAttraction()
      }
    })
  }

  loadToursistAttraction(touristAttraction: TouristAttraction) {
    this.touristAttraction = touristAttraction
    this.openModel()
  }

  loadCities(): void {
    this.cityService.getAllCities().subscribe((data) => {
      this.cities = data;
    })
  }

  openModel() {
    this.isModelOpen = true
  }

  closeModel() {
    this.isModelOpen = false
    this.getAllToursistAttraction()
  }

}
