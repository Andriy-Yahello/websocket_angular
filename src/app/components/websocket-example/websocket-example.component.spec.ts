import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketExampleComponent } from './websocket-example.component';

describe('WebsocketExampleComponent', () => {
  let component: WebsocketExampleComponent;
  let fixture: ComponentFixture<WebsocketExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsocketExampleComponent]
    });
    fixture = TestBed.createComponent(WebsocketExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
