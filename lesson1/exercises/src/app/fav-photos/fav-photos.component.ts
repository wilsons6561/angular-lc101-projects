import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.stlzoo.org/files/8915/5743/5404/Orangutan_Merah_-_JoEllen_Toler_Saint_Louis_Zoo.JPG'
  image2 = 'https://www.stlzoo.org/files/9714/2047/1232/Baby-orangutan-Jan-1-2015_IMG_8314_Stephanie-Braccini_Saint_Louis_Zoo_web.jpg'
  image3 = 'https://www.stlzoo.org/files/4215/9775/7252/Cinta_rain_5.jpg'

  constructor() { }

  ngOnInit() {
  }

}