import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import Monitor from '../models/monitor.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        width: 'fit-content',
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'translateX(-90%)'
      })),
      state('closed', style({
        width: 'fit-content',
        height: '200px',
        opacity: 0.5,
        backgroundColor: 'green',
        transform: 'translateX(0%)'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  str: string[];
  arr: Array<Monitor>;
  data: Array<any>;
  loader = false;
  formattedWidth: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.arr = new Array();
    this.data = new Array<any>();
    this.str = new Array<string>();
    const m1 = new Monitor(0, 'monitor one');
    const m2 = new Monitor(0, 'monitor two');
    const m3 = new Monitor(0, 'monitor three');

    this.arr.push(m1);
    this.arr.push(m2);
    this.arr.push(m3);

    this.str.push('shalom is trying listening to black sails what a show');
    this.str.push('shalom is trying listening');
    this.str.push('shalom is trying ');
    this.str.push('shalom is trying listening ');


    // let text = document.createElement("span");
    // document.body.appendChild(text);

    // text.style.font = "times new roman";
    // text.style.fontSize = 16 + "px";
    // text.style.height = 'auto';
    // text.style.width = 'auto';
    // text.style.position = 'absolute';
    // text.style.whiteSpace = 'no-wrap';
    // text.innerHTML = 'Hello World';

    // let width = Math.ceil(text.clientWidth);
    // this.formattedWidth = width + "px";

    // console.log('formattedWidth ' + formattedWidth );
    // document.querySelector('.my').textContent
    //         = formattedWidth;
    // document.body.removeChild(text);



  }
  onMonitorClick(id) {
  }

  onBtnClick() {
    // this.loader = !this.loader;
    this.dataService.getPosts().subscribe( (retData: Array<any>) => {
      this.data = retData;
    });
  }

  onPost() {
    this.loader = !this.loader;
  }


}
