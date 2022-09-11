import { Component,OnInit} from '@angular/core';
import { StudentDataService } from './services/student-data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	public students:any;
	public errorMsg:string='';
	
	constructor(private studentservices: StudentDataService) {}
	
	ngOnInit(){
	this.studentservices.getDetails()
	.subscribe(data => this.students = data,
				error => this.errorMsg = error['message']);
				console.log(this.students);
	}
}