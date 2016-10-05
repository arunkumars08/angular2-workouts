import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainAppModule } from './mainapp.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainAppModule);
