import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {

    const dataCall: Observable<any> = this.dataService.getData();
    dataCall.subscribe((data) => {
        this.router.navigate(['firstchild']);
      },
      (error) => {
        this.router.navigate(['home']);
      });
  }

}
