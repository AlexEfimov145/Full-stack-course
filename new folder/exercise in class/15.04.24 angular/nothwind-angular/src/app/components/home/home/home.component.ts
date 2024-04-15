import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    public img = Math.floor(Math.random() * 2) +1;
    public weekendDiscount = 20;
    public weekdayDiscount = 10;

    public isWeekend():boolean{
      const today = new Date();
      return today.getDay() >= 6;
    }

    public ngOnInit(){
      this.title.setTitle('NW home');
      console.log('component initialized');
    }
    public ngOnDestroy(){
      console.log('component destroyed');
    }

    public constructor (private title:Title){
    }
}
