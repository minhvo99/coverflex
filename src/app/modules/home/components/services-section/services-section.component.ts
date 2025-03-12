import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent implements OnInit {
    isLoading = false;
    icons = ['Mountains-3', 'Fishing', 'Crosshair-3'];
    featureIcon = ['auth', 'respect', 'earth', 'personal', 'smile'];
    imgSection1 = ['img1', 'img2', 'img3'];
    imgSection2 = ['img4', 'img5', 'img6', 'img7'];
    iconMap = ['mapFish', 'mapMountains', 'mapCorsshands'];
    imgReview = ['butter', 'cherry', 'orange-2', 'orange']
    reviewCard = {
        img: 'assets/images/img-fruit.png',
        date: '24 Sep 2024',
        autho: 'La famille',
        review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua`
    }
    private map: any;
    date: Date[] | undefined;
    formMessage!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formMessage = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            message: ['', Validators.required],
        });
    }

    reset(): void {
        this.formMessage.reset();
    }

    getError(formControlName: string) {
        return (
            this.formMessage.get(formControlName)?.dirty &&
            this.formMessage.get(formControlName)?.hasError('required')
        );
    }

    onShowReview (img: string, review: any) {
        this.reviewCard = {
            img: `assets/images/${img}.png`,
            date: review.date,
            autho: review.author,
            review: review.review
        }
    }

    onUpload(event: any) {}
}
