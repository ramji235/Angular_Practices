import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbr } from './navbr/navbr';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Navbr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myapp';
  public register(data:any){
    console.log(data)
  }
}
