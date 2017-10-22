import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  obs1 = Subscription;
  obs2 = Subscription;
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
        return data * 2;
      });
    // this.obs2 =
    myNumbers.subscribe(
      (data: number) => {
        console.log(data);
      }
    );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('error');
        observer.complete();
      }, 5000);
    });
    this.obs1 = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

}
