import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';


const BASIC_RUL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(BASIC_RUL + "api/admin/users", {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + StorageService.getToken()
    );
  }
}
