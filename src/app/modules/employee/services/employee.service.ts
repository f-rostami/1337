import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../models/employee.interface';
import { ISortOptions } from '../models/sort-options.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.baseUrl;

  employees: IEmployee[];

  constructor(private _http: HttpClient) { }


  //get employees between 5 to 7 individual
  getRandomEmployees() {
    return this._http.get(`${this.baseUrl}/employees`)
      .pipe(
        map((response: any) => {
          const shuffledEmployees = this._shuffle(response);
          this.employees = shuffledEmployees.slice(0, this._getRandomInt(5, 7));
          return this.employees;
        })
      )

  }

  sortEmployees(sortOptions: ISortOptions[]) {
    const sortedEmployees = [...this.employees];
    return this._sortBy(sortedEmployees, sortOptions);
  }

  private _shuffle(array: any[]): any[] {
    let crntIndx = array.length, rndIndx;

    //remain elms to shuffle
    while (crntIndx != 0) {
      // pick a remaining elms
      rndIndx = Math.floor(Math.random() * crntIndx);
      crntIndx--;
      //  swap elms
      [array[crntIndx], array[rndIndx]] = [
        array[rndIndx], array[crntIndx]];
    }

    return array;
  }

  private _getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private _sortBy(array: any[], options: ISortOptions[]) {
    let compareStr = '';
    options.forEach(x => {
      compareStr !== '' && (compareStr += " || ");
      compareStr += `${x.direction === 'asc' ? 'a' : 'b'}.${[x.field]}.localeCompare(${x.direction === 'asc' ? 'b' : 'a'}.${[x.field]})`;
    })

    return array.sort((a, b) => eval(compareStr))
  }
}
