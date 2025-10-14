import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-search-cities',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-cities.component.html',
  styleUrl: './search-cities.component.css'
})
export class SearchCitiesComponent implements OnInit{
  // sample city list; replace with API data if needed
private cities = [
'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata',
'Pune', 'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad',
'Guwahati', 'Shillong', 'Bongaigon', 'Bhuvneshwar'
];


searchControl = new FormControl('');
filteredCities$!: Observable<string[]>;


// debounceTimeMs configurable
debounceTimeMs = 300;


ngOnInit(): void {
// create an observable that emits filtered results as user types
this.filteredCities$ = this.searchControl.valueChanges.pipe(
startWith(''),
// wait this many ms after the user stops typing
debounceTime(this.debounceTimeMs),
distinctUntilChanged(),
map((v: string | null) => this.filterCities(String(v || '')))
);
}


private filterCities(query: string): string[] {
const q = query.trim().toLowerCase();
if (!q) return this.cities.slice(0, 50); // return all (or first N) when empty


return this.cities.filter(c => c.toLowerCase().includes(q));
}
}

