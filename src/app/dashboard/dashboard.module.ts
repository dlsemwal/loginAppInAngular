import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { PicturesComponent } from './pictures/pictures.component';
import { CommentsComponent } from './comments/comments.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, UserComponent, PicturesComponent, CommentsComponent, AboutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [AuthGuard]
})
export class DashboardModule { }
