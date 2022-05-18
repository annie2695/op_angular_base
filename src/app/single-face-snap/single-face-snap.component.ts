import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  hasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const snapId: number = +this.route.snapshot.params['id'];

    this.faceSnap = this.faceSnapService.getById(snapId);
    this.hasSnapped = false;
  }

  onSnap(): void {
    if (this.hasSnapped) {
      this.faceSnapService.snapById(this.faceSnap.id, 'unsnap');
      this.hasSnapped = false;
    } else {
      this.faceSnapService.snapById(this.faceSnap.id, 'snap');
      this.hasSnapped = true;
    }
  }
}
