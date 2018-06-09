import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../providers/movie/movie';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LinkProvider } from '../../providers/links/link.provider';
import { FullvideoPage } from '../fullvideo/fullvideo';

@IonicPage()
@Component({
  selector: 'page-videoplayer',
  templateUrl: 'videoplayer.html',
  providers: [LinkProvider]
})
export class VideoplayerPage implements OnInit{
  fileURL: string;
  file: Blob;
  trustedUrl: SafeUrl;
  videoOut: boolean;
  icono: string;
  movie: Movie;
  video;
  token;

  @ViewChild('videoplayer') videoplayer: any;
  private status: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer, private _linkProvider: LinkProvider) {
    this.status='play';
    this.icono = 'ios-play-outline';
    this.movie = navParams.data['movie'];
    this.video = navParams.data['video'];
    this.token = localStorage.getItem('token');
  }

 ngOnInit(){
  this._linkProvider.getContent(this.token, this.video).subscribe(res=>{
    alert('we are ready');
    this.file = new Blob([res], {type: 'video/mp4'});
    this.fileURL = URL.createObjectURL(this.file);
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.fileURL);
    console.log(this.trustedUrl);
  },
  err=>{
    console.log(err);
  });
 }

  toggleVideo(event: any) {
    this.navCtrl.push(FullvideoPage, {video: this.trustedUrl});
  }
  goToBack(){
    this.navCtrl.pop();
  }
}
