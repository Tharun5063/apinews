import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../service/apiservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
  businessnewsdata:any=[];
  ngOnInit(): void {
this.api.businessnews().subscribe((result)=>
{
  console.log(result.articles);
  this.businessnewsdata= result.articles;
})
  }

}
