import {EventEmitter, Injectable} from "@angular/core";
import {MenuItem} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbService {
  items: MenuItem[] = [];
  breadcrumbChanged: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();

  getBreadcrumb(): MenuItem[] {
    return this.items;
  }

  setBreadcrumb(breadcrumb: MenuItem[]): void {
    this.items = breadcrumb;
    this.breadcrumbChanged.emit(this.items);
  }
}
