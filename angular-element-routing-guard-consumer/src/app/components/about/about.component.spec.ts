import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let debugElement:DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    debugElement=fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', async() => {
    console.log(component)
    await expect(component).toBeTruthy();
  });

  it('Testing execution of ngOnInit',()=>{
    expect(component.message).toContain('OnInit Executed:-');
  })
});
