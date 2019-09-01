
// Components, functions, plugins

import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RelativeTimePipe } from './relative-time.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ErrorHandler, Injectable, Injector, NgModule } from '@angular/core';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
//import { MyApp } from './app.component';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Camera } from '@ionic-native/camera/ngx';
import { IonTextAvatar } from 'ionic-text-avatar';
import { Ionic2RatingModule } from 'ionic2-rating';
import { IonicImageLoader } from 'ionic-image-loader';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { IonAlphaScrollModule } from 'ionic2-alpha-scroll';
import { Keyboard } from '@ionic-native/keyboard/ngx';


// Services
//import { PostService } from '../services/post-service';
//import { UserService } from '../services/user-service';
//import { NotificationService } from '../services/notification-service';
//import { ChatService } from '../services/chat-service';

// Providers
//import { DatabaseService } from './services/database.service';
//import { Database } from '../providers/database/database';
//import { LocalStorageService } from './services/localstorage.service';
//import { Localstorage } from '../providers/localstorage/localstorage';
//import { SynchronizationService } from'./services/synchronization.service';
//import { Synchronization } from '../providers/synchronization/synchronization';
//import { RelativeTime } from '../pipes/relative-time';


/*
// Pages
import { HomePage } from '../pages/home/home';
import { ConferenceCityPage } from '../pages/conferencecity/conferencecity';
import { SocialPage } from '../pages/social/social';
import { MorePage } from '../pages/more/more';
import { ActivityPage } from '../pages/activity/activity';
import { SliderPage } from '../pages/slider/slider';
import { HelpPage } from '../pages/help/help';
import { SpeakersPage } from '../pages/speakers/speakers';
import { ProgramPage } from '../pages/program/program';
import { MapPage } from '../pages/map/map';
import { ModalPage } from '../pages/modal/modal';
import { LoginPage } from '../pages/login/login';
import { ExhibitorsPage } from '../pages/exhibitors/exhibitors';
import { NotesPage } from '../pages/notes/notes';
import { DatabasePage } from '../pages/database/database';
import { EvaluationConference } from '../pages/evaluationconference/evaluationconference';
import { MyAgenda } from '../pages/myagenda/myagenda';
import { ProfilePage } from '../pages/profile/profile';
import { ConversationsPage } from '../pages/conversations/conversations';
import { NotificationsPage } from '../pages/notifications/notifications';
import { AttendeesPage } from '../pages/attendees/attendees';
import { NetworkingPage } from '../pages/networking/networking';
import { AttendeemessagePage } from '../pages/attendeemessage/attendeemessage';
import { AttendeeBookmarksPage } from '../pages/attendeebookmarks/attendeebookmarks';
//import { NotificationsPage } from '../pages/notifications/notifications';
import { ConversationPage } from '../pages/conversation/conversation';
//import { SettingPage } from '../pages/setting/setting';
import { SponsorsPage } from '../pages/sponsors/sponsors';
import { MyAgendaFull } from '../pages/myagendafull/myagendafull';
import { SplashPage } from '../pages/splash/splash';

*/

// Temporary Support Pages
//import { FloorplanMappingPage } from '../pages/floorplanmapping/floorplanmapping';


@NgModule({
  declarations: [
    AppComponent,
    RelativeTimePipe,
   // MyApp,
  //  HomePage,
   // SocialPage,
   // MorePage,
    //SliderPage,
  //  HelpPage,
    IonTextAvatar,
   // SpeakersPage,
  //  ProgramPage,
  //  MapPage,
  //  ModalPage,
  //  ActivityPage,
  //  LoginPage,
   // ConversationPage,
//    NotificationsPage,
//    SettingPage,
   // SponsorsPage,
   // ConferenceCityPage,
   // ExhibitorsPage,
  //  NotesPage,
  //  NotificationsPage,
  //  AttendeesPage,
  //  AttendeemessagePage,
  //  AttendeeBookmarksPage,
//	NetworkingPage,
  //  DatabasePage,
//	EvaluationConference,
//	MyAgenda,
//	MyAgendaFull,
 //   ProfilePage,
//    SplashPage,
//	FloorplanMappingPage
//	RelativeTime
  ],

  imports: [
  BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
	ChartsModule,
	FileUploadModule,
    IonicImageViewerModule,
    IonAlphaScrollModule,
    Ionic2RatingModule,
    HttpClientModule,
	IonicStorageModule.forRoot(),
	IonicImageLoader.forRoot(),
	//IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom'})
	],

  //bootstrap: [IonicApp],

  entryComponents: [
    //MyApp,
   // HomePage,
 //   SliderPage,
  //  SocialPage,
  //  MorePage,
  //  HelpPage,
   // SpeakersPage,
  //  ProgramPage,
//    UserPage,
//    NotificationsPage,
//    SettingPage,
  //  SponsorsPage,
  //  MapPage,
  //  ModalPage,
  //  ActivityPage,
  //  LoginPage,
//	ConversationPage,
 //   ConferenceCityPage,
 //   DatabasePage,
 //   ExhibitorsPage,
  //  NotesPage,
  //  NotificationsPage,
 //   AttendeesPage,
 //   AttendeemessagePage,
 //   AttendeeBookmarksPage,
	// NetworkingPage,
// 	EvaluationConference,
//	MyAgenda,
 //   MyAgendaFull,
 //   SplashPage,
// 	ProfilePage,
//	FloorplanMappingPage
  ],

  providers: [
	Camera,
	StatusBar,
    OneSignal,
    Keyboard,
	//Localstorage,
	SplashScreen,
//	PostService,
//	UserService,
//  NotificationService,
	//ChatService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  
	//[{ provide: ErrorHandler, useClass: MyErrorHandler }],
	//Database,
//	SQLite,
//	Synchronization
    ],
  
  bootstrap: [AppComponent]
  })


  export class AppModule {}






