import { OllivanderService } from 'src/app/services/ollivander.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Wand } from 'src/app/models/wand';

@Component({
  selector: 'app-wand-details',
  templateUrl: './wand-details.component.html',
  styleUrls: ['./wand-details.component.css']
})
export class WandDetailsComponent implements OnInit {

  wand: Wand;

  constructor(private wandService: OllivanderService, private activatedRoute: ActivatedRoute, private router: Router) { 

    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const idParam: number = +paramMap.get('id'); //we need the id param
        if (!idParam || idParam > this.wandService.wands.length || idParam < 0) { //extend the condition to handle any invalid id-s
           // we should return to the wands' list page
           router.navigate(['wands']);
        }
        else {
          this.wand = this.wandService.wands.find(wand => wand.id === idParam);
        }
      }
    );

  }

  ngOnInit(): void {
  }

}
