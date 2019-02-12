import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core'; 
import { AppComponent } from '../app/app.component'; 
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from '../app/pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);
 
@NgModule({
	imports: [
		BrowserModule
	],

	declarations: [
		AppComponent,
		CapitalizadoPipe,
		DomseguroPipe,
		ContrasenaPipe
	],

	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'es'
		}
	],

	bootstrap: [
		AppComponent
	]
})

export class AppModule { }