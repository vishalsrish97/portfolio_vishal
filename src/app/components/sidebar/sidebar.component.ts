import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() activeSection = 'home';
  @Input() scrollPct = 0;
  @Input() isOpen = false;
  @Output() navClicked = new EventEmitter<void>();

  data = PORTFOLIO;

  scrollTo(href: string): void {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.navClicked.emit();
  }
}
