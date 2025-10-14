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
import { MessagesComponent } from './components/messages/messages.component';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';
import { ToastComponent } from './components/toast/toast.component';
import { MockDataComponent } from './components/mock-data/mock-data.component';
import { UnsavedFormComponent } from './components/unsaved-form/unsaved-form.component';
import { unsavedChangesGuard } from './core/guards/unsaved-changes.guard';
import { UserTableComponent } from './components/user-table/user-table.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { ModalComponent } from './components/modal/modal.component';
import { ExampleComponent } from './components/example/example.component';
import { SalesChartComponent } from './components/sales-chart/sales-chart.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PhoneComponent } from './components/phone/phone.component';
import { ProfileComponent } from './components/profile/profile.component';
import { userResolver } from './core/resolvers/user.resolver';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CartDemoComponent } from './components/cart-demo/cart-demo.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { SearchCitiesComponent } from './components/search-cities/search-cities.component';
import { NestedMenuComponent } from './components/nested-menu/nested-menu.component';
import { ClickAnalyticsComponent } from './components/click-analytics/click-analytics.component';
import { MockServiceErrorComponent } from './components/mock-service-error/mock-service-error.component';
import { RealtimeNotificationsComponent } from './components/realtime-notifications/realtime-notifications.component';
import { AutoFocusFormComponent } from './components/auto-focus-form/auto-focus-form.component';
import { RoleBasedMenuComponent } from './components/role-based-menu/role-based-menu.component';
import { BlogFilterQueryComponent } from './components/blog-filter-query/blog-filter-query.component';
import { RegisterComponent } from './components/register/register.component';
import { MockUploadComponent } from './components/mock-upload/mock-upload.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceResolver } from './core/resolvers/invoice.resolver';
import { FaqComponent } from './components/faq/faq.component';
import { Home1Component } from './components/home1/home1.component';
import { Example1Component } from './components/example1/example1.component';

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
    {
        path: 'messages',
        component: MessagesComponent
    },
    {
        path: 'multi-step-form',
        component: MultiStepFormComponent
    },
    {
        path: 'toast',
        component: ToastComponent
    },
    {
        path: 'mock-data',
        component: MockDataComponent
    },
    {
    path: 'unsaved-form',
    component: UnsavedFormComponent,
    canDeactivate: [unsavedChangesGuard] // ✅ attach the guard here
    },
    {
        path: 'user-table',
        component: UserTableComponent
    },
    {
        path: 'drag-drop',
        component: DragDropComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'sales-chart',
        component: SalesChartComponent
    },
    {
        path: 'user-form',
        component: UserFormComponent
    },
    {
        path: 'phone',
        component: PhoneComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        resolve: { user: userResolver } // 👈 attach resolver here
    },
    { path: 'home', 
        component: HomeComponent, 
        data: { animation: 'HomePage' } 
    },
    { path: 'about', 
        component: AboutComponent, 
        data: { animation: 'AboutPage' } 
    },
    {
        path: 'cart-demo',
        component: CartDemoComponent
    },
    // question 26. Session Storage
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    // 
    {
        path: 'search-cities',
        component: SearchCitiesComponent
    },
    {
        path: 'nested-menu',
        component: NestedMenuComponent
    },
    {
        path: 'click-analytics',
        component: ClickAnalyticsComponent
    },
    {
        path: 'mock-service-error',
        component: MockServiceErrorComponent
    },
    {
        path: 'realtime-notifications',
        component: RealtimeNotificationsComponent
    },
    {
        path: 'auto-focus-form',
        component: AutoFocusFormComponent
    },
    {
        path: 'role-based-menu',
        component: RoleBasedMenuComponent
    },
    {
        path: 'blog-filter-query',
        component: BlogFilterQueryComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'mock-upload',
        component: MockUploadComponent
    },
    // question 38 toast message after 3 second
    {
        path: 'example1',
        component: Example1Component
    },
    // question 39 starts here
    {
        path: 'invoice/:id',
        component: InvoiceDetailComponent,
        resolve: { invoice: InvoiceResolver },  // 🔹 Resolver key 'invoice'
    },
    {   path: '', redirectTo: 'invoice/101', pathMatch: 'full' },
    // question 39 ends here
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'home1',
        component: Home1Component
    },
];

