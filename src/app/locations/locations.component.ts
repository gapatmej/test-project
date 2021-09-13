import { Component, OnInit } from '@angular/core';
import { ILocation } from '../model/location.model';
import { IPerson } from '../model/person.model';
import { LocationService } from '../service/location.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  textSearch = "";
  persons:IPerson[]= [];

  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.findAll();
  }

  search():void{
    this.persons =  this.persons.filter((p)=>{
      return p.name!.first!.indexOf(this.textSearch ) > -1 || 
      p.location!.state!.indexOf(this.textSearch ) > -1 ||
      p.location!.country!.indexOf(this.textSearch ) > -1 ||
      p.location!.postcode === this.textSearch||
      p.location!.city!.indexOf(this.textSearch ) > -1
    })
    if(this.textSearch === ""){
      this.findAll();
      return;
    }

  }

  findAll():void{
    this.locationService.getAll().subscribe((resp)=>{
      if(resp.body && resp.body.results){
        this.persons = resp.body!.results!
      }
    });
  }

  sortBy(column:string):void{
    this.persons = _.sortBy(this.persons, [column]);
  }

}
