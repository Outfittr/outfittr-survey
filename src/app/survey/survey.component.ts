import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { RequestsService } from '../services/requests.service';

interface Garment {
  imageSource: string;
}

interface Wardrobe {
  tops: Garment[];
  bottoms: Garment[];
}

interface EnvironmentFactor {
  weather: number;
  temperature: number;
  formality: number;
  season: number;
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
  public states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
    'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  public ratingClass = [1, 2, 3, 4, 5];
  public weatherFactors = ['sunny', 'cloudy', 'windy', 'rainy'];
  public temperatureFactors = ['cold', 'hot', 'neutral'];
  public seasonFactors = ['winter', 'spring', 'summer', 'fall'];
  public loading = true;

  public randomOutfit: Wardrobe;
  public randomWardrobe: Wardrobe;
  public randomOutfitKeys;
  public randomWardrobeKeys;

  public outfitSelected = {};
  public submission = {
    sex: -1,
    state: -1,
    formality: Math.floor(Math.random() * 11),
    weather: Math.floor(Math.random() * (this.weatherFactors.length)),
    temperature: Math.floor(Math.random() * (this.temperatureFactors.length)),
    season: Math.floor(Math.random() * (this.seasonFactors.length)),
    createdOutfit: {},
    randomOutfit: {}
  };

  constructor(
    private formBuilder: FormBuilder,
    private request: RequestsService
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
    this.request.getSurvey({tops: 4, bottoms: 4}).subscribe((data: any) => {
      this.randomOutfit = data.data.outfit;
      this.randomWardrobe = data.data.wardrobe;
      this.randomOutfitKeys = Object.keys(this.randomOutfit);
      this.randomWardrobeKeys = Object.keys(this.randomWardrobe);
      this.loading = false;
    });
  }

  private submit(stepper): void {
    if (!this.selectedOutfit()) {
      return;
    }

    const topString = 'tops';
    const botString = 'bottoms';

    this.submission.randomOutfit = ({
      Tops: this.randomOutfit.tops[0],
      Bottoms: this.randomOutfit.bottoms[0],
      rating: this.outfitFormGroup.value.randomRateCtrl
    });
    this.submission.createdOutfit = ({
      top: this.randomWardrobe.tops[this.outfitSelected[topString]],
      bottom: this.randomWardrobe.bottoms[this.outfitSelected[botString]],
      rating: this.wardrobeFormGroup.value.wardrobeRateCtrl
    });

    this.submission.state = this.demographicFormGroup.value.stateCtrl;
    this.submission.sex = this.demographicFormGroup.value.sexCtrl;

    // Send the data
    this.request.sendSurvey(this.submission).subscribe((data: any) => {
      console.log(data);
      location.reload();
    });
  }

  public selectedOutfit(): boolean {
    return Object.keys(this.outfitSelected).length === 2;
  }

  private selectArticle(index: number, type: string): void {
    this.outfitSelected[type] = index;
  }

  private isSelected(index: number, type: string): boolean {
    return this.outfitSelected[type] === index;
  }
}
