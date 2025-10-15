import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'tab1', loadComponent: () => import('../tab1/tab1.page').then(m => m.Tab1Page) },
      { path: 'tab2', loadComponent: () => import('../tab2/tab2.page').then(m => m.Tab2Page) },
      { path: 'tab3', loadComponent: () => import('../tab3/tab3.page').then(m => m.Tab3Page) },
      { path: 'tab4', loadComponent: () => import('../tab4/tab4.page').then(m => m.Tab4Page) },
      {
        path: 'tab5',
        loadComponent: () => import('../tab5/tab5.page').then( m => m.Tab5Page)
      },
    

      { path: 'back', loadComponent: () => import('../back/back.page').then(m => m.BackPage) },
      { path: 'cardio', loadComponent: () => import('../cardio/cardio.page').then(m => m.CARDIOPage) },
      { path: 'profile', loadComponent: () => import('../profile/profile.page').then(m => m.ProfilePage) },
      { path: 'checkin', loadComponent: () => import('../checkin/checkin.page').then(m => m.CheckinPage) },
      { path: 'chest', loadComponent: () => import('../chest/chest.page').then(m => m.ChestPage) },
      { path: 'chat', loadComponent: () => import('../chat/chat.page').then(m => m.ChatPage) },
      { path: 'notification', loadComponent: () => import('../notification/notification.page').then(m => m.NotificationPage) },
      { path: 'exercise', loadComponent: () => import('../exercise/exercise.page').then(m => m.ExercisePage) },
      { path: 'setting', loadComponent: () => import('../setting/setting.page').then(m => m.SettingPage) },
      { path: 'change-password', loadComponent: () => import('../change-password/change-password.page').then(m => m.ChangePasswordPage) },
      { path: 'view', loadComponent: () => import('../view/view.page').then(m => m.ViewPage) },
      { path: 'setting-profile', loadComponent: () => import('../setting-profile/setting-profile.page').then(m => m.SettingProfilePage) },
      { path: 'dashboard', loadComponent: () => import('../dashboard/dashboard.page').then(m => m.DashboardPage) },
      { path: 'step', loadComponent: () => import('../step/step.page').then(m => m.StepPage) },
      { path: 'newchat', loadComponent: () => import('../newchat/newchat.page').then(m => m.NewchatPage) },
      { path: 'developer', loadComponent: () => import('../developer/developer.page').then(m => m.DeveloperPage) },
      { path: 'privacy', loadComponent: () => import('../privacy/privacy.page').then(m => m.PrivacyPage) },
      { path: 'theme', loadComponent: () => import('../theme/theme.page').then(m => m.ThemePage) },
      { path: 'language', loadComponent: () => import('../language/language.page').then(m => m.LanguagePage) },
      { path: 'legs', loadComponent: () => import('../legs/legs.page').then(m => m.LegsPage) },
      { path: 'calories', loadComponent: () => import('../calories/calories.page').then(m => m.CaloriesPage) },
      {
        path: 'userprofile',
        loadComponent: () => import('../userprofile/userprofile.page').then( m => m.UserprofilePage)
      },

      // 🔹 Change default tab to Tab5
      { path: '', redirectTo: '/tabs/tab4', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    redirectTo: '/skip',
    pathMatch: 'full',
  },
];
