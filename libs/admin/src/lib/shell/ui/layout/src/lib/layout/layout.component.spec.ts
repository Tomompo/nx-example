import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { SidebarModule } from "@rdc-final/admin/src/lib/shell/ui/sidebar";
import { TopbarModule } from "@rdc-final/admin/src/lib/shell/ui/topbar";
import { RouterTestingModule } from "@angular/router/testing";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutComponent
      ],
      imports: [
        RouterTestingModule,
        SidebarModule,
        TopbarModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
