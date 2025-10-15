import { bootstrapApplication } from '@angular/platform-browser';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// ✅ Ionic Storage
import { Storage } from '@ionic/storage-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),

    // ✅ Proper way to provide Storage
    {
      provide: Storage,
      useFactory: async () => {
        const storage = new Storage({
          name: 'fitquest',
          driverOrder: ['indexeddb', 'localstorage']
        });
        await storage.create();
        return storage;
      }
    }
  ]
});
  