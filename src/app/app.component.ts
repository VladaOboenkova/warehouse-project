import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numOfRacks: number = 1;
  numOfShelves: number = 1;
  numOfCells: number = 1;

  showWarehouse: boolean = false;
  submitted: boolean = false;

  onSubmit(){
    this.showWarehouse = true;
    this.submitted = true;
  }

  unSubmit(){
    setTimeout(() => this.submitted = false, 0);
  }
}
