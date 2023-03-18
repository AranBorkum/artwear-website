import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { ShopComponent } from "./shop/shop.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {BlogComponent} from "./blog/blog.component";
import {EventsComponent} from "./events/events.component";
import {AboutMeComponent} from "./footer-content/about-me/about-me.component";
import {ContactComponent} from "./footer-content/contact/contact.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./verify-email/verify-email.component";

const routes: Routes = [
  {path: "home", component: LandingPageComponent},
  {path: "shop", component: ShopComponent},
  {path: "blog", component: BlogComponent},
  {path: "events", component: EventsComponent},
  {path: "about", component: AboutMeComponent},
  {path: "contact", component: ContactComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "password-recovery", component: ForgotPasswordComponent},
  {path: "verify-email-address", component: VerifyEmailComponent},

  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "**", redirectTo: "/home", pathMatch: "full"}
];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
