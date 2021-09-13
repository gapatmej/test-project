import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IPerson } from '../model/person.model';
import { CustomHttpResponse } from '../model/custom-http-response.model';

type EntityResponseType = HttpResponse<CustomHttpResponse>;
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  resourceUrl = "https://randomuser.me/api/?results=20"


  constructor(private http: HttpClient) { }

  getAll():Observable<EntityResponseType>{
    return this.http.get<CustomHttpResponse>(this.resourceUrl, { observe: 'response' })
 
  }



}

