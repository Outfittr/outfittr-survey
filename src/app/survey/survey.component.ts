import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RequestsService } from '../services/requests.service';

interface Garment {
  src: string;
  name: string;
}

interface Wardrobe {
  Tops: Garment[];
  Bottoms: Garment[];
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.less']
})
export class SurveyComponent implements OnInit {
  public demographicFormGroup: FormGroup;
  public outfitFormGroup: FormGroup;
  public wardrobeFormGroup: FormGroup;

  public sexOptions = ['male', 'female'];
  public states = ['idaho', 'other'];
  public ratingClass = [1, 2, 3, 4, 5];

  public randomOutfit: Wardrobe = {
    Tops: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}) as Garment
    ],
    Bottoms: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}) as Garment
    ]
  };
  public randomWardrobe: Wardrobe  = {
    Tops: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}) as Garment,
      ({src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}) as Garment
    ],
    Bottoms: [
      ({src: 'https://drive.google.com/uc?authuser=0&id=1OerxKsVdxyMWbWsn5aEwFwsjpn0eIevF&export=download'}) as Garment,
      ({src: 'https://drive.google.com/uc?authuser=0&id=104nclYRM9yCxWWeAtXR9ynv9bB2UTF16&export=download'}) as Garment

    ]
  };
  public randomOutfitKeys = Object.keys(this.randomOutfit);
  public randomWardrobeKeys = Object.keys(this.randomWardrobe);

  public submission = {
    sex: -1,
    state: -1,
    factors: {},
    createdOutfit: {},
    createRating: -1,
    randomOutfit: {},
    randRating: -1
  };

  constructor(
    private formBuilder: FormBuilder,
    private requests: RequestsService
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
    this.requests.getSurvey().subscribe((data) => {
      console.log(data);
    });
  }

  private submit(): void {
    if (!this.selectedOutfit()) {
      return;
    }

    this.submission.createRating = this.wardrobeFormGroup.value.wardrobeRateCtrl;
    this.submission.randRating = this.outfitFormGroup.value.randomRateCtrl;

    this.submission.randomOutfit = this.randomOutfit;

    this.submission.state = this.demographicFormGroup.value.stateCtrl;
    this.submission.sex = this.demographicFormGroup.value.sexCtrl;

    // Send the data
    console.log(this.submission);
  }

  private selectedOutfit(): boolean {
    return Object.keys(this.submission.createdOutfit).length === 2;
  }

  private selectArticle(index: number, type: string): void {
    this.submission.createdOutfit[type] = this.randomWardrobe[type][index].src;
  }

  private isSelected(index: number, type: string): boolean {
    return this.submission.createdOutfit[type] === this.randomWardrobe[type][index].src;
  }
}
