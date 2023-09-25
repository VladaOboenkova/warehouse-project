import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})

export class WarehouseComponent implements OnChanges {

  @Input() numRacks: number = 0;
  @Input() numShelves: number = 0;
  @Input() numCells: number = 0;
  @Input() submitted: boolean = false;

  @Output() renderedEvent = new EventEmitter();

  racksAmount: number[] = [];
  shelvesAmount: number[] = [];
  cellsAmount: number[] = [];

  renderWarehouse (){
      this.racksAmount = new Array(this.numRacks);
      this.shelvesAmount = new Array(this.numShelves);
      this.cellsAmount = new Array(this.numCells);
  }

  constructor() { }

  ngOnChanges(){
    if (this.submitted == true){
      this.renderWarehouse();
      this.renderedEvent.emit();
    }
  }
}
