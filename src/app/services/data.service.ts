import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import Monitor from '../models/monitor.model';
import { HttpClient } from '@angular/common/http';

const url = 'https://my-json-server.typicode.com/typicode/demo/posts';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  onMonitor: Subject<Monitor>;
  monitor: Observable<Monitor>;

  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit(): void {

    this.onMonitor = new Subject<Monitor>();
    this.monitor = this.onMonitor.asObservable();
  }

  getPosts() {
    return this.http.get(url);
  }

}
