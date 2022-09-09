import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LayoutComponent, LayoutModule} from "@rdc-final/admin/src/lib/contracts/ui/layout";
import {ContractComponent} from "@rdc-final/admin/src/lib/contracts/feature/contract";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'new',
            component: ContractComponent,
          },
          {
            path: ':id',
            component: ContractComponent,
          }
        ]
      }
    ])
  ],
})
export class ShellModule {}
