import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() timerEvent = new EventEmitter<number>();
  timer = 0;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  startTimer() {
    this.timer = setInterval(() => {
      this.timerEvent.emit(this.count + 1);
      this.count++;
    }, 1000);
    
  }
  
  stopTimer() {
    clearInterval(this.timer);
  }

}
