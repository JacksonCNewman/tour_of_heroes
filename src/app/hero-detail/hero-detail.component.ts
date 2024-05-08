import { Component, Input } from '@angular/core';
import { Hero } from "../hero";
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf, UpperCasePipe} from "@angular/common";


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe, CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
