import { Component, effect } from '@angular/core';
@Component({
  selector: 'integration-section',
  templateUrl: './integration-section.component.html',
  styleUrl: './integration-section.component.scss'
})
export class IntegrationSectionComponent {
    integrationItems  = [
      {
        title: 'Flexible Softwareintegration',
        description: ` Sie können jederzeit den Mix von Software & APPs einsetzen, den Sie
          für Ihr Geschäft brauchen.`,
        img: 'assets/images/integration-1.jpg',
        effect: 'fade-right'
      },
      {
        title: 'Nahtlose technische Harmonie am Arbeitsplatz',
        description: ` Mobile Geräte, Computer, Betriebssysteme und Anwendungen arbeiten wie
          ein Orchester zusammen, wenn Sie Ihre Arbeit im Unternehmen erledigen.`,
        img: 'assets/images/integration-2.jpg',
        effect: 'fade-up'
      },
      {
        title: 'Optimieren Sie Ihre Arbeitsabläufe mit Coverflex',
        description: `Mit einems
          <strong style="color: #aacccc">Coverflex Project Konto</strong> können
          Sie auf Ihrem PC eigene <strong>Profile</strong> zur Steuerung von
          <strong>Arbeitsabläufen</strong> erstellen. Sie koordinieren den
          Umlauf und Fluß von Dokumenten, ihre Be- und Verarbeitung und Ablage.
          Hierfür können Sie vorgefertigte APPs nutzen - von vielen Anbietern
          über deren APIs oder Import-/Export-Funktionen.`,
        img: 'assets/images/integration-3.jpg',
        effect: 'fade-left'
      }
    ]
  }