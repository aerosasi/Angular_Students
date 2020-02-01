import { Component, OnInit } from '@angular/core';
import { studata } from '../studata.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  studata: studata[]=[
    new studata('ram','male')
  ];
  
  constructor() {}

  ngOnInit() {
  }

}
