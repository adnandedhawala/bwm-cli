import { Component, OnInit } from '@angular/core';
import{RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  public rentals:Rental[] =[];
  constructor(private rentalService:RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (response:Rental[])=>{
        this.rentals = response;
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("completed");
      }
    );
  }

}
