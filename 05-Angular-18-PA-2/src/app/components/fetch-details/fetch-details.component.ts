import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fetch-details',
  standalone: true,
  imports: [CommonModule],
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
    this.http.get(`https://api.example.com/products/${id}`)
    .subscribe(data => {
      this.productData = data;
    });
  }
}
