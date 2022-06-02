import { RouterTestingModule } from "@angular/router/testing";
import {TestBed,ComponentFixture,fakeAsync,tick, async} from "@angular/core/testing";
import {Router,RouterLinkWithHref,ActivatedRoute,convertToParamMap} from "@angular/router";
import { AppComponent } from "./app.component";
import { DebugElement } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {routes} from "./app-routing.module"
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { Location } from "@angular/common";
import { By } from "@angular/platform-browser";
import { NavComponent } from "./components/nav/nav.component";
import { of } from "rxjs";
fdescribe("testing application routing",()=>{
    let router:Router;
    let component:AppComponent;
    let fixture:ComponentFixture<NavComponent>;
    let debugElement:DebugElement;
    let location:Location
    beforeEach(async(()=>{
       TestBed.configureTestingModule({
           imports:[FormsModule,RouterTestingModule.withRoutes(routes)],
           declarations:[
               AppComponent,
               HomeComponent,
               AboutComponent,
               NavComponent
           ],
          
          
       }).compileComponents()
    }))

    beforeEach(()=>{
        router=TestBed.get(Router);
        location=TestBed.get(Location);
        fixture=TestBed.createComponent(NavComponent);
        debugElement=fixture.debugElement;
        router.initialNavigation();
    })

    it("testing redirection to default route",async(()=>{
        fixture.detectChanges();       
        fixture.whenStable().then(()=>{
            expect(location.path()).toBe('/home')
        })
    }))

    it("navigating when clicking on link",fakeAsync(()=>{

        let fixtureAbout:ComponentFixture<AboutComponent>;
        fixtureAbout=TestBed.createComponent(AboutComponent)
        let aboutComp=fixtureAbout.componentInstance;
        fixture.detectChanges(); 
        tick();
        let links=debugElement.queryAll(By.css("ul li"));
        links[1].nativeElement.click();
        tick();
        expect(location.path()).toBe('/about/1')
        tick();
        expect(aboutComp).toBeTruthy();
        fixtureAbout.detectChanges();
        expect(aboutComp.message).toContain("OnInit Executed:-")

    }))
})
