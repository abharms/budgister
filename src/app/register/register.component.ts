import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public balance: number;
  public entries: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  	this.db.collection('2018').doc('January').collection('Entries').valueChanges()
  		.subscribe( (response) => {
  			this.entries = response;
  			let debits;
  			let credits;
  			
  			debits = this.entries.reduce( (acc, entry) => {
  				return acc + entry.debit;
  			}, 0)

  			credits = this.entries.reduce( (acc, entry) => {
  				return acc + entry.credit;
  			}, 0)

  			this.balance = (Math.round(credits * 100) / 100) - (Math.round(debits * 100) / 100);
  		})
  }

  public onSaveClick(date: string, name: string, description: string, category: string, amount: number): void {
  	this.db.collection('2018').doc('January').collection('Entries').add({
  		date: date,
  		name: name,
  		description: description,
  		category: category,
  		credit: amount
  	})
  }

}
