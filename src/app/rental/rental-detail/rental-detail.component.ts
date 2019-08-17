import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';


@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId: string;
  currentRental :Rental;
  constructor(private route: ActivatedRoute,private rentalService: RentalService) { }

  ngOnInit() {
    // this.currentRental = new Rental();
    this.route.params.subscribe(
      (response) => {
        this.currentId = response['rentalId'];
        // console.log(this.currentId)
        this.getRentals(this.currentId);
      }
    );
  }

  getRentals(rentalId:string){
    this.rentalService.getRentalsById(rentalId).subscribe(
      (response:Rental)=>{
        this.currentRental =response;
      }
    );
  }

}
