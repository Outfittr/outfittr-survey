import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Garment {
  src: string;
}

interface Wardrobe {
  tops: [Garment];
  bottoms: [Garment];
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less']
})
export class SurveyComponent implements OnInit {
  private demographicFormGroup: FormGroup;
  private outfitFormGroup: FormGroup;
  private wardrobeFormGroup: FormGroup;

  private sexOptions = ['male', 'female'];
  private states = ['idaho', 'other'];
  private ratingClass = [1, 2, 3, 4, 5];

  private randomOutfit: Wardrobe = {
    tops: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}) as Garment
    ],
    bottoms: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}) as Garment
    ]
  };
  private randomOutfitKeys = Object.keys(this.randomOutfit);

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.demographicFormGroup = this.formBuilder.group({
      sexCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required]
    });
    this.outfitFormGroup = this.formBuilder.group({
      randomRateCtrl: ['', Validators.required]
    });
    this.wardrobeFormGroup = this.formBuilder.group({
      wardrobeRateCtrl: ['', Validators.required]
    });
  }

  private submit(): void {
    console.log('Submitted');
  }
}
