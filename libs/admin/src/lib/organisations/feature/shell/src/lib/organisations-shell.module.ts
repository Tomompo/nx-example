import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () => (await import('@rdc-final/admin/src/lib/organisations/feature/organisation-list')).OrganisationListModule,
      },
      {
        path: ':id',
        loadChildren: async () => (await import('@rdc-final/admin/src/lib/organisations/feature/organisation')).OrganisationModule,
      }
    ])
  ],
})
export class OrganisationsShellModule {}
