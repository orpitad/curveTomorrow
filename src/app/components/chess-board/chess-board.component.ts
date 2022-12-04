import { Component } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent {
  boxes = Array(8)
    .fill(0)
    .map(() =>
      Array(8)
        .fill(0)
        .map((y, j) => j)
    );
  reportMove = ''
  pawnColor: string = 'black';
  place: boolean = false;
  originalPositions = {
    xPosition: 0,
    yPosition: 0,
    direction: 'North',
    pawnColor: 'black',
  };
  xPosition = 0;
  yPosition = 0;
  direction = 'North';
  pawnMoves = '';
  pawnTurn = '';
  constructor() {
    console.log(this.boxes);
  }

  startPlaying() {
    this.originalPositions = {
      xPosition: this.xPosition,
      yPosition: this.yPosition,
      direction: this.direction,
      pawnColor: this.pawnColor,
    };
    console.log(this.originalPositions);

    this.place = true;
  }

  restartGame() {
    this.pawnColor = 'black';
    this.place = false;
    this.originalPositions = {
      xPosition: 0,
      yPosition: 0,
      direction: 'North',
      pawnColor: 'black',
    };
    this.xPosition = 0;
    this.yPosition = 0;
    this.direction = 'North';
    this.pawnMoves = '';
    this.pawnTurn = '';
    this.reportMove = '';
  }

  play() {
    // if (this.pawnMoves === '') {
    //   this.pawnMoves = 1 + '';
    // }
    debugger;
    let positionTurned = '';
    let y = +this.yPosition;
    let x = +this.xPosition;
    switch (this.direction) {
      case 'North':
        y = y + +this.pawnMoves;
        if(this.pawnTurn === "right") {
          positionTurned = "East";
        }
        
        if(this.pawnTurn === "left") {
          positionTurned = "West";

        }
        break;
      case 'South':
        y = y - +this.pawnMoves;
        if(this.pawnTurn === "right") {
          positionTurned = "West";
        }
        
        if(this.pawnTurn === "left") {
          positionTurned = "East";

        }
        break;
      case 'East':
        x = x + +this.pawnMoves;
        if(this.pawnTurn === "right") {
          positionTurned = "South";
        }
        
        if(this.pawnTurn === "left") {
          positionTurned = "North";
        }
        break;
      case 'West':
        x = x - +this.pawnMoves;
        if(this.pawnTurn === "right") {
          positionTurned = "North";
        }
        
        if(this.pawnTurn === "left") {
          positionTurned = "South";
        }
        break;
      default:
        break;
    }
    console.log(x, y);
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && this.pawnMoves !== '') {
      this.xPosition = x;
      this.yPosition = y;
    }
    if(positionTurned.length > 0) {
      this.direction = positionTurned;
    }
    this.pawnMoves = '';
    this.pawnTurn = '';
    this.reportMove = '';
  }

  report() {
    this.reportMove = this.xPosition +" , " + this.yPosition +" , " + this.direction.toUpperCase() +" , " +this.pawnColor;
  }

  clean() {
    this.pawnMoves = '';
    this.pawnTurn = '';
    this.reportMove = '';
  }
}
