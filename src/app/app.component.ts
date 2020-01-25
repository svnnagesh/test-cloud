import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  productsData = [];

  constructor(private aService: ApiService){}

  ngOnInit(){


    this.aService.fetchProducts().subscribe(resp => {
      if(resp){
        Object.keys(resp).forEach(v => {
          this.productsData.push(resp[v]);
        });
      } else {
        alert('Unable to fetch data');
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.productsData, event.previousIndex, event.currentIndex);

  }


}

