import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    features = [
        {
          icon: "fas fa-digital-tachograph",
          title: "Digital Compliance",
          description: "Meet all regulatory requirements with our GoBD and Elster compliant solutions"
        },
        {
          icon: "fas fa-cogs",
          title: "Process Documentation",
          description: "Comprehensive documentation of your filing and processes organization"
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Device Integration",
          description: "Seamless integration across mobile devices, computers and applications"
        }
      ];
    
      integrationPoints = [
        "Custom workflow profiles for your PC",
        "Document circulation and processing control",
        "Multi-provider API integration",
        "Secure document archiving",
        "JSON-based metadata indexing"
      ];
   
    constructor() {}

    ngOnInit(): void {
    }

    
}
