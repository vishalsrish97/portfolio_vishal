import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  activeSection = signal<string>('home');
  sidebarOpen = signal<boolean>(false);
  scrollPct = signal<number>(0);

  dotSections = [
    { id: 'home',       label: 'Home'       },
    { id: 'about',      label: 'About'      },
    { id: 'skills',     label: 'Skills'     },
    { id: 'experience', label: 'Experience' },
    { id: 'education',  label: 'Education'  },
    { id: 'projects',   label: 'Projects'   },
    { id: 'contact',    label: 'Contact'    },
  ];

  private sectionIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact'];
  private observer!: IntersectionObserver;
  private revealObserver!: IntersectionObserver;

  ngOnInit(): void {
    this.setupSectionObserver();
    this.setupRevealObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.revealObserver?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPct.set(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private setupSectionObserver(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    // Observe after view init
    setTimeout(() => {
      this.sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) this.observer.observe(el);
      });
    }, 100);
  }

  private setupRevealObserver(): void {
    this.revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars
            entry.target.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
              bar.style.width = (bar.dataset['width'] ?? '0') + '%';
            });
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .stagger-children, .tl-item').forEach(el => {
        this.revealObserver.observe(el);
      });
    }, 200);
  }
}
