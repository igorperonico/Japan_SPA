import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAttractionService {

  url = 'http://localhost:3000/userTouristAttractions'
  constructor(private httpCLient: HttpClient) { }

  
}
