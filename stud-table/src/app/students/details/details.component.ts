import { Component, OnInit, Input } from '@angular/core';
import { studata } from '../studata.model';
import { BindingFlags } from '@angular/compiler/src/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  update: boolean = false;
  studata:studata[];
  studname;
  studgender;
  studDept;
  studDesc;
  rid=101;  //Change this if changing initial record
  uid;

  constructor() {
 this.studata=[{
    id:101,
    name:"ram",
    gender:"Male",
    dept:"IT",
    desc:"Good in Data Science and Handball"
  }]
}

  ngOnInit() {
  }

 addStudent(form:NgForm){
  console.log(this.studname + this.studgender);
  console.log(this.update);
  
   if(this.update==false)   //Insertion part
   {
    this.studata.push({
      id:this.rid+1,
      name: this.studname,
      gender: this.studgender,
      dept:this.studDept,
      desc:this.studDesc
     
    })
    this.rid++;
    form.reset(); 
  }
  else    // Update Part
  {
    this.update=false;
    this.studata[this.uid-1].name=this.studname;
    this.studata[this.uid-1].gender=this.studgender;
    this.studata[this.uid-1].desc=this.studDesc;
    this.studata[this.uid-1].dept=this.studDept;
    console.log(this.studata);
     form.reset();
  }
 
 }

 deleteStudent(id: number): void {
   //deletion part
  this.studata = this.studata.filter(studata => studata.id !== id);
}


//Displaying records to be updated
updateStudent(id:number,name:string,gender:string,dept:string,desc:String){  
  
  this.update=true;  //this is a variable for updating records
  this.studname=name;
  this.studgender=gender;
  this.studDept=dept;
  this.studDesc=desc;
  this.uid=id;
}
}

