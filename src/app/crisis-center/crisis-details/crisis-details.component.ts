import { ActivatedRoute }    from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  template: require( './crisis-details.component.html' )
})
export class CrisisDetailsComponent implements OnInit {
  id: number;
  constructor(private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.params['id'], 10);
  }
}
