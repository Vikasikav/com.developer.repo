import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FssRefundComponent } from './modules/fss-refund/fss-refund.component';
import { MisExportComponent } from './modules/mis-export/mis-export.component';
import { ReceiptingComponent } from './modules/receipting/receipting.component';
import { TrxnDateRangeComponent } from './modules/trxn-date-range/trxn-date-range.component';

const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  },
  {
    path:'fssrefund',
    component:FssRefundComponent
  },
  {
    path:'misexport',
    component:MisExportComponent
  },
  {
    path:'receipting',
    component:ReceiptingComponent
  },
  {
    path:'trxndaterange',
    component:TrxnDateRangeComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
