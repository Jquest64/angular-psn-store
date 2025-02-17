import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from "./card-label/card-label.component";
import { CardPricingComponent } from "./card-pricing/card-pricing.component";

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CardLabelComponent, CardPricingComponent]
})
export class CardComponent implements OnInit {

  @Input()
  gameCover: string = ""
  @Input()
  gameLabel:string = ''
  @Input()
  gameType: string = 'XPTO | PS4'
  @Input()
  gamePrice: string = 'R$ 399,90'

  constructor() { }
  ngOnInit() { }

 }
