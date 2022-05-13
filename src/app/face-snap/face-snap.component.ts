import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: boolean;

  ngOnInit(): void {
    this.hasSnapped = false;
  }

  onSnap(): void {
    if (this.hasSnapped) {
      this.faceSnap.snaps--;
      this.hasSnapped = false;
    } else {
      this.faceSnap.snaps++;
      this.hasSnapped = true;
    }
  }
}
