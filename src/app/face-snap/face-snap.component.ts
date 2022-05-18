import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService, private router: Router) {}

  ngOnInit(): void {
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
