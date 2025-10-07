import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ProductComponent } from './components/product/product.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { FetchDetailsComponent } from './components/fetch-details/fetch-details.component';
import { JsonComponent } from './components/json/json.component';
import { BlogComponent } from './components/blog/blog.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { SharedComponent } from './components/shared/shared.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SwitchUrlsComponent } from './components/switch-urls/switch-urls.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PasswordSpecialCharacterComponent } from './components/password-special-character/password-special-character.component';
import { DynamicPhonesComponent } from './components/dynamic-phones/dynamic-phones.component';
import { ReverseDemoComponent } from './components/reverse-demo/reverse-demo.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { Home1Component } from './components/home1/home1.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { ProfileImageUploaderComponent } from './components/profile-image-uploader/profile-image-uploader.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';

export const routes: Routes = [
    {
        path: 'parent',
        component: ParentComponent,
    },
    {
        path: 'product',
        component: ProductComponent,
    },
    {
        path: 'login-form',
        component: LoginFormComponent,
    },
    {
        path: 'product-title',
        component: ProductTitleComponent,
    },
    {
        path: 'product-details/:productId',
        component: ProductDetailsComponent,
    },
    {
        path: 'fetch-details/:id',
        component: FetchDetailsComponent,
    },
    {
        path: 'json',
        component: JsonComponent,
    },
    {
        path: 'blog',
        component: BlogComponent,
    },
    {
        path: 'error-message',
        component: ErrorMessageComponent,
    },
    {
        path: 'shared',
        component: SharedComponent,
    },
    {
        path: 'spinner',
        component: SpinnerComponent,
    },
    {
        path: 'switch-urls',
        component: SwitchUrlsComponent,
    },
    {
        path: 'product-list',
        component: ProductListComponent,
    },
    {
        path: 'password-special-character',
        component: PasswordSpecialCharacterComponent,
    },
    {
        path: 'dynamic-phones',
        component: DynamicPhonesComponent,
    },
    {
        path: 'reverse-demo',
        component: ReverseDemoComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin',
        component: AdminDashboardComponent,
        canActivate: [authGuard]    //protected
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'product-tabs',
        component: ProductTabsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
//comment
//     {
//   path: 'admin-dashboard1',
//     loadChildren: () =>
//     import('./components/admin-dashboard1/admin-dashboard1.component').then((m) => m.AdminDashboard1Component) },
//     { path: 'home1', component: Home1Component },
//comment

//comment
{
    path: 'admin-dashboard1',
    loadComponent: () =>
      import('./components/admin-dashboard1/admin-dashboard1.component')
        .then((m) => m.AdminDashboard1Component)
  },
  {
    path: 'home1',
    component: Home1Component
  },
//comment


    {
        path: 'user-list',
        component: UserListComponent,
    },
    {
        path: 'product-display',
        component: ProductDisplayComponent,
    },
    {
        path: 'profile-image-uploader',
        component: ProfileImageUploaderComponent,
    },
    {
        path: 'job-application',
        component: JobApplicationComponent,
    },

];
