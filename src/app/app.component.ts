import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  january: any;

  constructor(private db: AngularFirestore) {
    db.collection('January').valueChanges()
    	.subscribe( (res) => {
    		this.january = res;
    	})

  }

  save(name: string) {
  	console.log(name);
  	this.db.collection('January').doc('3dtb0rWkxEtSTZRj7nFA').set({
  		date: '1/1/2018',
  		name: name, 
  		description: 'groceries'
  	}).then(() => {
  		console.log('Saved!');
  	})
  }
}