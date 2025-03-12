import { Component } from '@angular/core';

@Component({
  selector: 'section-our-service',
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent {
  technologies = [
    {
      name: "KMU-Organisation",
      image:
        "../../../../../assets/images/image2.png",
    },
    {
      name: "Apps zur Selbstverwaltung der Mitarbeiter",
      image:
        "../../../../../assets/images/image1.png",
    },
    {
      name: "Angebot gesetzlich vorgeschrieben/dokumentiert Business",
      image:
        "../../../../../assets/images/tech-3.jpeg",
    },
    {
      name: "Handels- und Steuerreporting",
      image:
        "../../../../../assets/images/tech-4.jpeg",
    },
  ];
}
