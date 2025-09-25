import { Component, OnInit, Input} from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-question19',
  standalone: true,
  imports: [NgClass],
  templateUrl: './question19.component.html',
  styleUrl: './question19.component.css'
})
export class Question19Component implements OnInit{

  @Input() text!: string;
  @Input() btnClass!: string;
  constructor(){}

  ngOnInit(): void {
  
}
}
