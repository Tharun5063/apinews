import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {
  technewsdata:any=[];
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.technews().subscribe((result)=>{
      this.technewsdata= result.articles;
    })
  }

}
