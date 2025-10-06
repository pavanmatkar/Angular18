import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fetch-details',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './fetch-details.component.html',
  styleUrl: './fetch-details.component.css'
})
export class FetchDetailsComponent implements OnInit{
  productId! : string;
  productData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit(): void {
    // Subscribe to route param changes
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;

      //Fetch product data
      this.fetchProduct(this.productId)
    });
  }
  fetchProduct(id: string): void {
    // create service for apis
    this.http.get<any[]>(`https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/1`)
    .subscribe(data => {
      this.productData = data.find(item => item.id == +id);
      if (!this.productData){
        console.warn('Author not found for ID: ', id)
      }
    });
  }
}
