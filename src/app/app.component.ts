import { Component, inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shreya-portfolio';
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private lenis: any;
  private reqId: number | undefined;

  constructor() {
    const translate = inject(TranslateService);
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    
    // Check local storage for saved language, otherwise use English
    const browserLang = translate.getBrowserLang();
    const savedLang = localStorage.getItem('lang');
    translate.use(savedLang || (browserLang && browserLang.match(/en|fr/) ? browserLang : 'en'));
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initSmoothScrolling();

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if (this.lenis) {
          this.lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
      });
    }
  }

  private initSmoothScrolling() {
    this.lenis = new Lenis({
      duration: 1.5, // Buttery smooth feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.reqId = requestAnimationFrame(raf);
    };

    this.reqId = requestAnimationFrame(raf);
  }

  ngOnDestroy() {
    if (this.lenis) {
      this.lenis.destroy();
    }
    if (this.reqId) {
      cancelAnimationFrame(this.reqId);
    }
  }
}
