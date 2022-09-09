import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './contract/contract.component';
import {ButtonModule} from "@rdc-final/shared/src/lib/ui/button";

@NgModule({
    imports: [CommonModule, ButtonModule],
  declarations: [ContractComponent],
  exports: [ContractComponent],
})
export class ContractModule {}
