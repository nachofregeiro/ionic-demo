import { it, describe, inject, expect } from '@angular/core/testing';
import { TabsPage } from "./tabs.ts";
import { HomePage } from "../home/home.ts";

describe('Component: Tabs component', () => {

  it('should initalize tab1Root with HomePage', () => {
      // Arrange
      // Act
      let tabs = new TabsPage();

      // Assert
      expect(typeof(tabs.tab1Root)).toBe(typeof(HomePage));
  });
});