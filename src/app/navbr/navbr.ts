import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contactus } from '../contactus/contactus';
@Component({
  selector: 'app-navbr',
  imports: [RouterLink],
  templateUrl: './navbr.html',
  styleUrl: './navbr.css'
})
export class Navbr {

}
