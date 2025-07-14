import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private service:AdminService,
    private snackbar: MatSnackBar
  ){
    this.getTasks();
  };

  listOfTasks: any = [];

  getTasks(){
    this.service.getAllTasks().subscribe((res) => {
      this.listOfTasks = res;
    })
  }

  deleteTask(id: number){
    this.service.deleteTask(id).subscribe((res) => {
      this.snackbar.open("Task deleted successfully", "Close", {duration: 5000});
      this.getTasks();
    })
  }
}
