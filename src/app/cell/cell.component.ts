import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {

  @Input() cellIndex: number = 0;
  @Input() submitted: boolean = false;

  goodsList: string[] = [];

  generateRandomNumber(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  constructor() { }

  ngOnChanges(): void {
      if (this.submitted == true){
        let randomGoodsList: string[] = [];
        let randomGoodsListSize: number = this.generateRandomNumber(0, 5);
        if (randomGoodsListSize === 0){
          randomGoodsList = ['Пусто']
        } else {
            for (let index = 0; index < randomGoodsListSize; index++){
              randomGoodsList[index] =`Товар ${this.generateRandomNumber(0, 100)}`;
            }
        }
        this.goodsList = randomGoodsList;
      }
  }

}
