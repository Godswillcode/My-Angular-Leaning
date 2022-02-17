import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-obs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ObsUserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
