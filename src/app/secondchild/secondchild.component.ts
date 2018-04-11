import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  currentvalue: number;
  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((values: { id: number }) => {
      this.currentvalue = values.id;
    });


  }

}
