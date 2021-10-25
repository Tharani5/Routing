import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bitcoin',
  template: `
    <p>
      bitcoin Component works
    </p>
    <ul>
      <li (click)="onSelect(bitcoins)" [class.selected]="isCheck(bitcoins)" *ngFor="let bitcoins of bitcoin">
      <span>{{bitcoins.id}}</span>  {{bitcoins.spec}}
      </li>
    </ul>
  `,
  styles: [`
  .selected{
    color: red;
  }
  `]
})
export class BitcoinComponent implements OnInit {
  public selectedID!:number;
   bitcoin=[
    {"id":1, "spec": "decentralized"},
    {"id":2, "spec":"Asset"},
    {"id":3, "spec":"limited volume"}
  ]
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramap : ParamMap)=>
    { let id=parseInt(paramap.get('id')!);
    this.selectedID=Number(id);
  })
  }

  onSelect(bitcoins:any)
  {
    //this.router.navigate(['/bitcoin',bitcoins.id]);
    this.router.navigate([bitcoins.id],{relativeTo:this.route});
  }

  isCheck(bitcoins: any)
  {
    return bitcoins.id === this.selectedID;
  }
}
