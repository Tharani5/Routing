import { CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { BitcoindetailsComponent } from './bitcoindetails/bitcoindetails.component';
import { CurrentpriceComponent } from './currentprice/currentprice.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { FounderComponent } from './founder/founder.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'',redirectTo:'/bitcoin-top', pathMatch:'full'},
  {path:'bitcoin-top', component : BitcoinComponent},
  {
    path:'bitcoin-top/:id',
    component: BitcoindetailsComponent,
    children:[
      {path:'currentprice',component:CurrentpriceComponent},
      {path:'founder',component:FounderComponent}
    ]
  },
  {path:'ethereum', component : EthereumComponent},
  {path:"**",component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BitcoinComponent,EthereumComponent,BitcoindetailsComponent,
                 PagenotfoundComponent,CurrentpriceComponent,FounderComponent];