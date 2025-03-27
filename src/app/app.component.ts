import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOkmakeup';
  @HostListener('keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    // Select only interactive focusable elements, EXCLUDING images and videos
    const focusableElements = Array.from(
      document.querySelectorAll(
        'button, a, input, select, textarea, [tabindex="0"]:not(img):not(video), [contenteditable="true"]'
      )
    ) as HTMLElement[];

    const activeElement = document.activeElement as HTMLElement;
    const currentIndex = focusableElements.indexOf(activeElement);

    if (currentIndex === -1) return; // If nothing is focused, do nothing

    if (event.key === 'ArrowRight' || (event.key === 'Tab' && !event.shiftKey)) {
      // Move to the next focusable element
      const nextIndex = (currentIndex + 1) % focusableElements.length;
      focusableElements[nextIndex].focus();
      event.preventDefault();
    }

    if (event.key === 'ArrowLeft' || (event.key === 'Tab' && event.shiftKey)) {
      // Move to the previous focusable element
      const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
      focusableElements[prevIndex].focus();
      event.preventDefault();
    }
  }
}
