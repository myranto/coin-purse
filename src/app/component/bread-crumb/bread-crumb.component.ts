import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {BreadCrumbService} from "../bread-crumb-service";
import {MenuItem} from "primeng/api";
import {BreadcrumbModule} from "primeng/breadcrumb";

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [
    BreadcrumbModule
  ],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.css'
})
export class BreadCrumbComponent {
  items: MenuItem[] = [];
  home: MenuItem | undefined;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private breadcrumbService: BreadCrumbService) {
    this.home = { icon: 'pi pi-home', routerLink: '/home' };
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
      let root: ActivatedRoute = this.activatedRoute.root;
      let children: ActivatedRoute[] = root.children;
      console.log(children)
      let breadcrumb: Array<{ label: string, url: string }> = [];
      children.forEach(child => {
        let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");
        if(routeURL !== ""){
          let label = child.snapshot.data['breadcrumb'];
          let url = `/${routeURL}`;
          breadcrumb.push({label, url});
        }
      });
      this.breadcrumbService.setBreadcrumb(breadcrumb);
      this.items = this.breadcrumbService.getBreadcrumb();
    });
  }
}
