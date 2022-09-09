import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {RouterOutlet} from "@angular/router";
import {SidebarModule} from "@rdc-final/admin/src/lib/shell/ui/sidebar";
import {TopbarModule} from "@rdc-final/admin/src/lib/shell/ui/topbar";

@NgModule({
    imports: [
        CommonModule,
        RouterOutlet,
        SidebarModule,
        TopbarModule,
    ],
  declarations: [
    LayoutComponent
  ],
})
export class LayoutModule {}
