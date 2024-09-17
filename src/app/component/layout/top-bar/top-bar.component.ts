import {Component, Input} from '@angular/core';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {NgClass} from "@angular/common";
import {MenuItem} from "primeng/api";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {BreadCrumbComponent} from "../../bread-crumb/bread-crumb.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    ToolbarModule,
    ButtonModule,
    NgClass,
    BreadcrumbModule,
    BreadCrumbComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  @Input() sidebarVisible!:Function;
  @Input() sidebar!:boolean;
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  // constructor(private route: ActivatedRoute, private router: Router) {
  //   // this.items = [{ label: 'type-cost', routerLink: '/home/type-cost' },
  //   //   { label: 'type-credit', routerLink: '/home/type-credit' },
  //   //   { label: 'Accessories', routerLink: '/home' },
  //   //   { label: 'Backpacks', routerLink: '/home' },
  //   //   { label: 'Item', routerLink: '/home' }];
  //
  //   this.home = { icon: 'pi pi-home', routerLink: '/home' };
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => this.items = this.createBreadcrumbs(this.route.root));
  // }
  getStyle(){
    return {
      width:this.sidebar ? 'calc(100% - 300px)' : '100%',
      backgroundColor: 'white',
      position: 'absolute',
      right: '0'
    }
  }
  //  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []):any {
  //   const children: ActivatedRoute[] = route.children;
  //
  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }
  //
  //   for (const child of children) {
  //     const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
  //     if (routeURL !== '') {
  //       url += `/${routeURL}`;
  //     }
  //
  //     const label = child.snapshot.data['breadcrumb'];
  //     if (label) {
  //       console.log(url, label);
  //       breadcrumbs.push({
  //         label:label,
  //         routerLink:url
  //       });
  //     }
  //
  //     return this.createBreadcrumbs(child, url, breadcrumbs);
  //   }
  // }
}
