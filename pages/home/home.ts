import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public data_limit : number = 6;
  posts : any;
  constructor(private http: Http, private loadingCtrl: LoadingController) {

    this.dataFetch(this.data_limit);

  }

  loadMore(){
  	 this.data_limit += 6;
     this.dataFetch(this.data_limit);
  }

  dataFetch(limit){
	    let loadingPopup = this.loadingCtrl.create({
	      content: 'Loading Food Items...',
	      spinner: 'ios'
	    });
        console.log(limit);
	    loadingPopup.present();
        
	    this.http.get('https://www.reddit.com/r/gifs/new/.json?limit='+limit)
	      .map(res => res.json())
	      .subscribe(
	        data => {
	          setTimeout(() => {
	            this.posts = data.data.children;
	            loadingPopup.dismiss();
	          }, 1000);
	        },
	        err => console.error(err)
	    );

        

	  }
}