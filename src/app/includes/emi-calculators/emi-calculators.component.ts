import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-calculators',
  templateUrl: './emi-calculators.component.html',
  styleUrls: ['./emi-calculators.component.css']
})
export class EmiCalculatorsComponent implements OnInit {

  constructor() { }

 price:number=100000
  duration:number=1
  interestRate:number=7
    totalInterest: number = 0;
  finalAmount: number = 0;
  emi: number = 0;

  calculateEmi() {
    this.totalInterest = this.price * this.duration * this.interestRate / 100;
    this.finalAmount = this.price + this.totalInterest;
    this.emi = this.finalAmount / (this.duration * 12);
  }

  ngOnInit(): void {
    this.calculateEmi();
  }
}


