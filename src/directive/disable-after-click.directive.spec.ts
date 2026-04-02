import { DisableAfterClickDirective } from './disable-after-click.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('DisableAfterClickDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: document.createElement('button'),
    } as ElementRef;

    const mockRenderer = jasmine.createSpyObj('Renderer2', ['setProperty']);

    const directive = new DisableAfterClickDirective(
      mockElementRef,
      mockRenderer,
    );

    expect(directive).toBeTruthy();
  });
});
