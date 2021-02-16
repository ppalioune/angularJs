import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
 @Input() appareilName!: string;
  //appareilStatus: string = "éteint"
@Input() appareilStatus!: string
@Input() index!: number;

  constructor() { }
 
  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus
  }
  getColor(){
    if (this.appareilStatus === 'allumé') {
      return 'green'
    }
    if(this.appareilStatus ==='éteint') {
      return 'red'
    }
    else{
      return null
    }
  }
}
