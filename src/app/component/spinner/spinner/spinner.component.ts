import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  public loading: boolean = true;
  color: ThemePalette = 'warn'
  constructor() { }

  ngOnInit() {
  }

}
