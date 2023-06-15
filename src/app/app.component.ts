import { AfterViewChecked, Component, DoCheck, OnChanges, SimpleChanges , ChangeDetectorRef, Input} from '@angular/core';
import { PostService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Angular-Demo';
  inputData = 'inputData';
  passDataToChild =  [{
    name : 'charan',
    age: 30
  }];
  ss = false;
  constructor (private postService:PostService) {
  }
  ngOnInit() {
    this.postService.getPosts();
  }
  ngOnChanges(sc: SimpleChanges) {
   console.log('zchadgqeadadad', [sc]);
  };

  someFn() {
    this.passDataToChild[0].name = 'Ramya';
    this.passDataToChild = [...this.passDataToChild]
    // ngOnChanges will be called
  }

  ngDoCheck() {
    // localStorage.setItem('name', 'charan');
    // sessionStorage.setItem('name', 'charan');
    // document.cookie = 'prav' +'=; Path=/; Expires=Thu, 01 Jan 2022 00:00:01 GMT;';
    // document.cookie()
    // when input text change it will active and button click
    // if component change than ngdocheck will call
    console.log('vvdooooooooo');
  };
  ngAfterContentInit() {
    console.log('content initttttttttt')
  }
  ngAfterContentChecked() {
    // when input text change it will active and button click
    console.log('contentttt checked');
  };
  ngAfterViewInit() {
    console.log('viewwww initttttt');
  };
  ngAfterViewChecked() {
    // when input text change it will active and button click
    console.log('viewwww checkeddddd');
  };
  //  1.ngDoCheck, ngAfterContentChecked, ngAfterViewChecked will call everytime change in property,content, in view
  // 2.when u click button to update @Input, ngOnchange will call first including pt1 will call but next again u click
  //  same button this time ngOnchange will not call bec there is no change but Pt1 will call
  // buttonClicked() {
  //   this.passDataToChild = 'child Button';
  // }

}
