import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../shared/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  data = PORTFOLIO;
  leftSkills  = PORTFOLIO.skills.slice(0, 4);
  rightSkills = PORTFOLIO.skills.slice(4);
}
