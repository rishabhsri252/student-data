import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Operator } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
private url:string = "https://es-school-service-dev-zm5xloquaa-em.a.run.app/public/getStudent";
	
	constructor(private http: HttpClient) {}
	getDetails():Observable<any>{
	return this.http.get<any>(this.url)
            .pipe(map((data: any) => data.list ));
}
}