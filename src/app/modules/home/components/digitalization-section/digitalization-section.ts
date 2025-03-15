import { Component } from '@angular/core';

@Component({
  selector: 'digitalization-section',
  templateUrl: './digitalization-section.html',
  styleUrl: './digitalization-section.scss'
})
export class DigitalizationSection {
  cards = [
    {
      id: '01',
      title: 'Card 1',
      description: `Jede unternehmerische Tätigkeit unterliegt unzähligen Regelungen. Der
          Digitalisierung von Ablage und Abläufen kann man nicht ausweichen -
          das sehen schon das <strong>Handelsgesetzbuch</strong> in Verbindung
          mit der <strong>Abgabenordnung</strong> (GoBD + Elster),
          <strong>SV-Meldeportal</strong> und eine Reihe weitere Systeme vor,
          die man zu nutzen verpflichtet ist.`,
      image: 'assets/images/image1.png'
    },
    {
      id: '02',
      title: 'Card 2',
      description: ` Wir konzentrieren uns darauf, insbesondere
          <strong>kleine und mittlere Unternehmen </strong> (KMU) kostengünstig
          und effektiv mit praktikablen Maßnahmen hierbei zu begleiten.`,
      image: 'assets/images/image2.png'
    },
    {
      id: '03',
      title: 'Card 3',
      description: `Eine <strong>Verfahrensdokumentation</strong> dokumentiert für Sie,
          wie Ihre Ablage und Abläufe organisiert sind. Gleichzeitig hilft
          dieser <strong>Leitfaden</strong> Ihnen im Alltag, die Übersicht zu
          behalten, bei der <strong>Integration</strong> von E-Mail, APPs,
          Softwarepaketen, Belegen, Quittungen und mehr aus vielen Quellen.`,
      image: 'assets/images/image3.png'
    }
  ]
}
