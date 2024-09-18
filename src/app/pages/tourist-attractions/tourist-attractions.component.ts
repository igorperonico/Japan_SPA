import { Component } from '@angular/core';
import { ModelComponent } from '../../shared/ui/model/model/model.component';
import { FormTouristAtrractionsComponent } from '../../components/form-tourist-atrractions/form-tourist-atrractions.component';

@Component({
  selector: 'app-tourist-attractions',
  standalone: true,
  imports: [ModelComponent, FormTouristAtrractionsComponent],
  templateUrl: './tourist-attractions.component.html',
  styleUrl: './tourist-attractions.component.scss'
})
export class TouristAttractionsComponent {

}
