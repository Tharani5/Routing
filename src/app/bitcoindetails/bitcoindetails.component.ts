import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-bitcoindetails',
  templateUrl: './bitcoindetails.component.html',
  styleUrls: ['./bitcoindetails.component.css']
})
export class BitcoindetailsComponent implements OnInit {

  public bitcoinId!: number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    //let id=this.route.snapshot.paramMap.get('id');
    //this.bitcoinId=id;
    this.route.paramMap.subscribe((paramap: ParamMap)=>{
      let id=parseInt(paramap.get('id')!);
      this.bitcoinId=Number(id);
    })
  }

  onPrevious()
  {
    let previousId=this.bitcoinId-1;
    this.router.navigate(['/bitcoin-top',previousId]);
   // this.router.navigate([previousId],{relativeTo:this.route})
  }
  onNext()
  {
    let nextId=this.bitcoinId+1;
    this.router.navigate(['/bitcoin-top',nextId]);
   // this.router.navigate([nextId],{relativeTo:this.route})
  }
  gotoBitcoin()
  {
    let selectedId=this.bitcoinId;
    //this.router.navigate(['/bitcoin',{id:selectedId}]);
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }
  givePrice()
  {
    this.router.navigate(['currentprice'],{relativeTo:this.route});
  }
  tellFounder()
  {
    this.router.navigate(['founder'],{relativeTo:this.route});
  }
}
