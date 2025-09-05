import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api-2',
  standalone: true,
  // because we are going to use ngModel
  imports: [FormsModule,JsonPipe],
  templateUrl: './post-api-2.component.html',
  styleUrl: './post-api-2.component.css'
})
export class PostApi2Component implements OnInit{

  authorsObj:any = {
  "id": 0,
  "idBook": 0,
  "firstName": "",
  "lastName": ""
}

authorsList:any[]=[];

http = inject(HttpClient);

ngOnInit(): void {
  this.getAuthors()
}
onEdit(data: any){
  this.authorsObj = data;
}
// onDelete(id: number) {
//   this.http.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`)
//     .subscribe({
//       next: (res) => {
//         // DELETE usually returns null for 204 No Content
//         alert("Author Deleted Successfully");
        
//         this.getAuthors(); // refresh the list
//       },
//       error: (err) => {
//         console.error(err);
//         alert("Some Error Occurred");
//       }
//     });
// }


// onDelete(id: number) {
//   this.http.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`, { observe: 'response' })
//     .subscribe({
//       next: (res) => {
//         if (res.status === 200 || res.status === 204) {
//           console.log(`✅ Delete successful - Status: ${res.status}`);
//           alert("Author Deleted Successfully");
//           this.getAuthors(); 
//         } else {
//           console.log(`⚠️ Unexpected status code: ${res.status}`);
//         }
//       },
//       error: (err) => {
//         console.error("❌ Error occurred while deleting author:", err);
//         alert("Some Error Occurred");
//       }
//     });
// }


onDelete(id: number) {
  this.http.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${id}`)
    .subscribe({
      next: () => {
        alert("Author Deleted Successfully");

        // Remove from UI list manually
        this.authorsList = this.authorsList.filter(item => item.id !== id);
      },
      error: (err) => {
        console.error(err);
        alert("Some Error Occurred");
      }
    });
}


onSave(){
  debugger;
  this.http.post("https://fakerestapi.azurewebsites.net/api/v1/Authors", this.authorsObj).subscribe((res:any)=>{
    debugger;
    if(res){
      alert("Author Added Success")
      this.getAuthors()
    } else {
      alert("Some Error Occurred")
    }
  })
}
// onUpdate(){
//   debugger;
//   this.http.put("https://fakerestapi.azurewebsites.net/api/v1/Authors/", this.authorsObj).subscribe((res:any)=>{
//     debugger;
//     if(res){
//       alert("Author Updated Success")
//       this.getAuthors()
//     } else {
//       alert("Some Error Occurred")
//     }
//   })
// }

onUpdate() {
  debugger;

  // Make sure your object has an ID
  const authorId = this.authorsObj.id;

  this.http.put(
    `https://fakerestapi.azurewebsites.net/api/v1/Authors/${authorId}`,
    this.authorsObj
  ).subscribe({
    next: (res: any) => {
      debugger;
      alert("✅ Author Updated Successfully!");
      this.getAuthors();
    },
    error: (err) => {
      debugger;
      alert("❌ Failed to update author. Please check console for details.");
      console.error(err);
    }
  });
}


getAuthors(){
  this.http.get("https://fakerestapi.azurewebsites.net/api/v1/Authors").subscribe((res:any)=>{
    this.authorsList = res;
  })
}

}
