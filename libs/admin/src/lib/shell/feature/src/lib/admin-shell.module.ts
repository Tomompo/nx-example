import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin-shell.routes';
import { LayoutModule } from "@rdc-final/admin/src/lib/shell/ui/layout";

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forRoot(adminRoutes),
  ],
})
export class AdminShellModule {}
