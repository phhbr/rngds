import { NgClass } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rngds-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  menuIsOpen = false;
  toggleMobileNavigation() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  // when someone clicks on a link in the mobile navigation, close the menu
  @HostListener('click', ['$event'])
  closeMobileNavigation(event: MouseEvent) {
    if (event.target instanceof HTMLAnchorElement) {
      this.menuIsOpen = false;
    }
  }
}
