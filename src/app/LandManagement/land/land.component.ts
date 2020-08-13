import { Component, OnInit } from '@angular/core';
import { LandService } from '../../services/land.service';
import { Land } from './land';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css'],
  providers: [LandService],
})
export class LandComponent implements OnInit {

  constructor(private landService: LandService) { }

  lands: Land[];
  filterTitle="";
  filterSquaremeter="";
  filterReconstruction="";

  ngOnInit(): void {
    this.landService.getLands().subscribe(data => {
      this.lands = data;
    })
  }

}
