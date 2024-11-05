import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChallenegeModel } from '../../models/challenge-model';

@Component({
  selector: 'app-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrl: './challenge-item.component.css'
})
export class ChallengeItemComponent {
  @Input() model: ChallenegeModel | undefined;
  @Output() select = new EventEmitter<ChallenegeModel>();

  details() { 
    this.select.emit(this.model);
  }
}
