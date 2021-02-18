import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OllivanderService } from 'src/app/services/ollivander.service';

@Component({
  selector: 'app-wand-list',
  templateUrl: './wand-list.component.html',
  styleUrls: ['./wand-list.component.css']
})
export class WandListComponent implements OnInit {

  wands: Array<any>;

    constructor(private wandService: OllivanderService, private router: Router) {
        this.wands = this.wandService.wands;
    }

  ngOnInit(): void {
  }

  goToDetails(wandId: number) {
    this.router.navigate(['wands', wandId]);
}

}
