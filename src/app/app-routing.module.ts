import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule' },
  { path: 'activityfeedcomment', loadChildren: './activityfeedcomment/activityfeedcomment.module#ActivityfeedcommentPageModule' },
  { path: 'activityfeeddetails', loadChildren: './activityfeeddetails/activityfeeddetails.module#ActivityfeeddetailsPageModule' },
  { path: 'activityfeedleaderboard', loadChildren: './activityfeedleaderboard/activityfeedleaderboard.module#ActivityfeedleaderboardPageModule' },
  { path: 'activityfeedposting', loadChildren: './activityfeedposting/activityfeedposting.module#ActivityfeedpostingPageModule' },
  { path: 'attendeebookmarks', loadChildren: './attendeebookmarks/attendeebookmarks.module#AttendeebookmarksPageModule' },
  { path: 'attendeemessage', loadChildren: './attendeemessage/attendeemessage.module#AttendeemessagePageModule' },
  { path: 'attendees', loadChildren: './attendees/attendees.module#AttendeesPageModule' },
  { path: 'attendeesprofile', loadChildren: './attendeesprofile/attendeesprofile.module#AttendeesprofilePageModule' },
  { path: 'conferencecity', loadChildren: './conferencecity/conferencecity.module#ConferencecityPageModule' },
  { path: 'conversation', loadChildren: './conversation/conversation.module#ConversationPageModule' },
  { path: 'conversations', loadChildren: './conversations/conversations.module#ConversationsPageModule' },
  { path: 'database', loadChildren: './database/database.module#DatabasePageModule' },
  { path: 'educationdetails', loadChildren: './educationdetails/educationdetails.module#EducationdetailsPageModule' },
  { path: 'evaluationconference', loadChildren: './evaluationconference/evaluationconference.module#EvaluationconferencePageModule' },
  { path: 'evaluationlecture', loadChildren: './evaluationlecture/evaluationlecture.module#EvaluationlecturePageModule' },
  { path: 'evaluationworkshop', loadChildren: './evaluationworkshop/evaluationworkshop.module#EvaluationworkshopPageModule' },
  { path: 'exhibitordetails', loadChildren: './exhibitordetails/exhibitordetails.module#ExhibitordetailsPageModule' },
  { path: 'exhibitors', loadChildren: './exhibitors/exhibitors.module#ExhibitorsPageModule' },
  { path: 'floorplanmapping', loadChildren: './floorplanmapping/floorplanmapping.module#FloorplanmappingPageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'listinglevel1', loadChildren: './listinglevel1/listinglevel1.module#Listinglevel1PageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'loginsample', loadChildren: './loginsample/loginsample.module#LoginsamplePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'more', loadChildren: './more/more.module#MorePageModule' },
  { path: 'myagenda', loadChildren: './myagenda/myagenda.module#MyagendaPageModule' },
  { path: 'myagendafull', loadChildren: './myagendafull/myagendafull.module#MyagendafullPageModule' },
  { path: 'myagendapersonal', loadChildren: './myagendapersonal/myagendapersonal.module#MyagendapersonalPageModule' },
  { path: 'networking', loadChildren: './networking/networking.module#NetworkingPageModule' },
  { path: 'notes', loadChildren: './notes/notes.module#NotesPageModule' },
  { path: 'notesdetails', loadChildren: './notesdetails/notesdetails.module#NotesdetailsPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'post', loadChildren: './post/post.module#PostPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'profileimage', loadChildren: './profileimage/profileimage.module#ProfileimagePageModule' },
  { path: 'profilepasswordchange', loadChildren: './profilepasswordchange/profilepasswordchange.module#ProfilepasswordchangePageModule' },
  { path: 'profilesocialmediaentry', loadChildren: './profilesocialmediaentry/profilesocialmediaentry.module#ProfilesocialmediaentryPageModule' },
  { path: 'program', loadChildren: './program/program.module#ProgramPageModule' },
  { path: 'recent-posts', loadChildren: './recent-posts/recent-posts.module#RecentPostsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'review', loadChildren: './review/review.module#ReviewPageModule' },
  { path: 'searchbytopic', loadChildren: './searchbytopic/searchbytopic.module#SearchbytopicPageModule' },
  { path: 'searchresults', loadChildren: './searchresults/searchresults.module#SearchresultsPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'slider', loadChildren: './slider/slider.module#SliderPageModule' },
  { path: 'social', loadChildren: './social/social.module#SocialPageModule' },
  { path: 'speakerdetails', loadChildren: './speakerdetails/speakerdetails.module#SpeakerdetailsPageModule' },
  { path: 'speakers', loadChildren: './speakers/speakers.module#SpeakersPageModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
  { path: 'wall-posts', loadChildren: './wall-posts/wall-posts.module#WallPostsPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
