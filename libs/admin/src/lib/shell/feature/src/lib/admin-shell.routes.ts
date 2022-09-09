import { Route } from "@angular/router";
import { LayoutComponent } from "../../../ui/layout/src/lib/layout/layout.component";

export const adminRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'organisations',
        loadChildren: async () => (await import('@rdc-final/admin/src/lib/organisations/feature/shell')).OrganisationsShellModule,
      },
      {
        path: 'contracts',
        loadChildren: async () => (await import('@rdc-final/admin/src/lib/contracts/feature/shell')).ShellModule,
      }
    ]
  }
];
