import { Routes } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { ProductComponent } from './components/product/product.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTitleComponent } from './components/product-title/product-title.component';
import { FetchDetailsComponent } from './components/fetch-details/fetch-details.component';
import { JsonComponent } from './components/json/json.component';

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
];
