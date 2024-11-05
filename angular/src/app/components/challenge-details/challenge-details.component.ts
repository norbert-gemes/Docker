import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChallenegeModel } from '../../models/challenge-model';
import { DistanceModel } from '../../models/distance-model';

@Component({
  selector: 'app-challenge-details',
  templateUrl: './challenge-details.component.html',
  styleUrl: './challenge-details.component.css'
})
export class ChallengeDetailsComponent {
  @Input() model: ChallenegeModel | undefined;
  @Output() applyChanged = new EventEmitter<void>();

  apply(distance: DistanceModel, applied: boolean) {
    if (this.model) {
      this.model.distances.forEach(d => d.applied = false);
      distance.applied = applied;      
      this.applyChanged.emit();
    }
  }

}
