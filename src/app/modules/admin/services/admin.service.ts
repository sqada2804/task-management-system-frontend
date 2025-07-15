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

  postTask(taskDTO: any):Observable<any>{
    return this.http.post(BASIC_RUL + "api/admin/task", taskDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

    deleteTask(taskId: number):Observable<any>{
    return this.http.delete(BASIC_RUL + "api/admin/task/" + taskId, {
      headers: this.createAuthorizationHeader()
    })
  }

  getTaskById(taskId: number): Observable<any>{
    return this.http.get(BASIC_RUL + "api/admin/task/" + taskId, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllTasks():Observable<any>{
    return this.http.get(BASIC_RUL + "api/admin/tasks", {
      headers: this.createAuthorizationHeader()
    })
  }

  updateTask(taskDTO: any, id: number):Observable<any>{
    return this.http.put(BASIC_RUL + `api/admin/task/${id}`, taskDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + StorageService.getToken()
    );
  }
}
