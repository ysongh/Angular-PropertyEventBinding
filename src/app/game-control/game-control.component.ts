import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer = 0;
  count: number = 0;
  isEven = true;

  constructor() { }

  ngOnInit() {
  }
  
  startTimer() {
    this.timer = setInterval(() => {
      this.count++;
      if (this.count % 2 === 0){
        this.isEven = true;
      }
      else{
        this.isEven = false;
      }
    }, 1000);
    
  }
  
  stopTimer() {
    clearInterval(this.timer);
  }

}
