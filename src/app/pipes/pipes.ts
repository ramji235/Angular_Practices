import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  PercentPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {

  today  = new Date();
  price  = 2000;
  numberValue  = 1234567.9876;
  percentage  = 4
}
