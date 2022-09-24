import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { TweetsComponent } from "./tweets/tweets.component";
import { UsersComponent } from "./users/users.component";
import { HeaderComponent } from "./header/header.component";
import { LogoutComponent } from "./logout/logout.component";
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./register/register.component";
import { UserTweetsComponent } from "./user-tweets/user-tweets.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { UpdateTweetComponent } from "./update-tweet/update-tweet.component";
import { CommentsComponent } from "./comments/comments.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    TweetsComponent,
    UsersComponent,
    HeaderComponent,
    LogoutComponent,
    RegisterComponent,
    UserTweetsComponent,
    ForgotPasswordComponent,
    UpdateTweetComponent,
    CommentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
