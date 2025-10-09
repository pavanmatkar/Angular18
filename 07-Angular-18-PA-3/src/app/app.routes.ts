import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ProductTabsComponent } from './components/product-tabs/product-tabs.component';
import { AppParentComponent } from './components/app-parent/app-parent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { GreetingCardComponent } from './components/greeting-card/greeting-card.component';

export const routes: Routes = [
    {
        path: 'todo',
        component: TodoComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'contact-list',
        component: ContactListComponent
    },
    {
        path: 'login-button',
        component: LoginButtonComponent
    },
    {
        path: 'user-status',
        component: UserStatusComponent
    },
    {
        path: 'product-tabs',
        component: ProductTabsComponent
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'reports',
        loadChildren: () => 
            import('./components/reports/reports.module')
            .then(m => m.ReportsModule)
    },
    {
        path: 'app-parent',
        component: AppParentComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'greeting-card',
        component: GreetingCardComponent
    },
];
