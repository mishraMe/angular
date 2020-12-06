import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ImageService{
  constructor(private httpClient: HttpClient){

  }

  getData(url: string): Observable<any> {
    return this.httpClient.get(url, { responseType: 'blob' })
      .pipe(
        switchMap(response => this.readFile(response))
      );
  }

  postData(url:string, file: string){
    this.httpClient.post(url, file); // TODO logic to save the file in the post
  }

  //https://picsum.photos/200/300/?random testing link
  private readFile(blob: Blob) : Observable<string> {
    return new Observable<any>(obs => {
      const reader = new FileReader();
      reader.onerror = err => obs.error(err);
      reader.onabort = abt => obs.error(abt);
      reader.onload = () => obs.next(reader.result);
      reader.onloadend = () => obs.complete();
      return reader.readAsDataURL(blob);
    });
  }
}
