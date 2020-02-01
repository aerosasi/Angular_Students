import { Component, OnInit, Input } from '@angular/core';
import { studata } from '../studata.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  studata:studata[];
  studname;
  studgender;
  rid=1;
   games=[];
  constructor() {

    this.games = [{
      name : "Deus Ex: Mankind Divided",
      platform: " Xbox One, PS4, PC",
      release : "August 23"
  },
  {
      game : "Hue",
      platform: " Xbox One, PS4, Vita, PC",
      release : "August 23"
  },
  {
      game : "The Huntsman: Winter's Curse",
      platform: "PS4",
      release : "August 23"
  },
  {
      game : "The Huntsman: Winter's Curse",
      platform: "PS4",
      release : "August 23"
  }]

  this.studata=[{
    id:1,
    name:"ram",
    gender:"male"
  }]
  

   }

  ngOnInit() {

   
  }

 addStudent(){
  console.log(this.studname + this.studgender);
    this.studata.push({
      id:this.rid+1,
      name: this.studname,
      gender: this.studgender 
    })
    this.rid++;
    console.log(this.studata);
    
   

  //  
  //  this.studata.push(
  //    {name:this.name,gender:this.gender}
   
  //  )
 }

 deleteStudent(id: number): void {
  this.studata = this.studata.filter(studata => studata.id !== id);
}

}

