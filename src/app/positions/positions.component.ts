import { Component, OnInit } from '@angular/core';
import { PositionService} from "./shared/position.service"
// Import model
import { Position } from "./shared/position";


@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.sass']
})

export class PositionsComponent implements OnInit {
  private positions: Position[] = [];
  constructor( private positionService: PositionService) { }

  ngOnInit() {
    this.positionService.getPositions()
      .subscribe(data => this.positions = data);
  }

  deletePosition(positions) {
    if (confirm("are you delete ?" + positions.name + "?")) {
      var index = this.positions.indexOf(positions);
      this.positions.splice(index, 1);
      this.positionService.deletePosition(positions.id)
        .subscribe(null);
    }
  }
}
