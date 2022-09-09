import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationComponent } from './organisation/organisation.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrganisationComponent
      }
    ])
  ],
  declarations: [OrganisationComponent],
  exports: [OrganisationComponent],
})
export class OrganisationModule {}
