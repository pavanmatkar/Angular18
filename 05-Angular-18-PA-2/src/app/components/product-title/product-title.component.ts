import { Component } from '@angular/core';
import { RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-title.component.html',
  styleUrl: './product-title.component.css'
})
export class ProductTitleComponent {

}
