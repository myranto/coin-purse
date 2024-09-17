import {Routes} from '@angular/router';
import {TypeCostComponent} from "./pages/type-cost/type-cost.component";
import {TypeCreditComponent} from "./pages/type-credit/type-credit.component";
import {LoginComponent} from "./pages/authentication/login/login.component";
import {RegisterComponent} from "./pages/authentication/register/register.component";
import {CostComponent} from "./pages/cost/cost.component";
import {CreditComponent} from "./pages/credit/credit.component";
import {TopBarComponent} from "./component/layout/top-bar/top-bar.component";
import {SidebarComponent} from "./component/layout/sidebar/sidebar.component";
import {ContainerComponent} from "./component/layout/container/container.component";
import {TestComponent} from "./pages/test/test.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

export const routes: Routes = [
  {
    path: 'home',
    component: ContainerComponent,
    children: [
      {
        path:'dashboard',
        component : DashboardComponent
      },
      {
        path: 'type-cost',
        component: TypeCostComponent,
        data: {
          breadcrumb: 'Type dépense'
        },
        children:[
          {
            path: 'other',
            component: TestComponent,
            data: {
              breadcrumb: 'Type other'
            },
          },
        ]
      },
      {
        path: 'type-credit',
        component: TypeCreditComponent,
        data: {
          breadcrumb: 'Type crédit'
        }
      },
      {
        path: 'test',
        component: TestComponent,
        data: {
          breadcrumb: 'Page test'
        }
      },
      {
        path: 'cost',
        component: CostComponent,
        data: {
          breadcrumb: 'Dépense'
        }
      },
      {
        path: 'credit',
        component: CreditComponent,
        data: {
          breadcrumb: 'Type dépense'
        }
      },
    ]
  },
  {
    path:'**',
    component : NotfoundComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];
