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
      console.log(resp)
      if(resp){
        Object.keys(resp).forEach(v => {
          let data = resp[v];
          this.productsData.push(data);
        });
        console.log(this.productsData)
      } else {
        alert('Unable to fetch data');
      }
      
    }, err=> {
      console.log(err);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.productsData, event.previousIndex, event.currentIndex);

  }


}

