import { Component, OnInit } from '@angular/core';
import { BookModel } from './book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  title:String = "List of books";
  rbooks: BookModel[] =[];
    
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data)=>{
      console.log("data")
      console.log(data);
    this.rbooks = JSON.parse(JSON.stringify(data));
      console.log("results1")
      console.log(this.rbooks);
      console.log(this.rbooks[0]);
      console.log(this.rbooks[0].title);
    });
    console.log("results2")
    console.log(this.rbooks);
  }

}
