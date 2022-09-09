import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrganisationListComponent,
      }
    ])
  ],
  declarations: [OrganisationListComponent],
  exports: [OrganisationListComponent],
})
export class OrganisationListModule {}
