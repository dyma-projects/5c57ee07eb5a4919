import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  interpolation: string;
  img: string;

  constructor() { 
    this.interpolation = 'interpolation';
    this.img = 'data:image/png;base64,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'
  }

  ngOnInit(): void {
  }

  event(){
    
  }
}
