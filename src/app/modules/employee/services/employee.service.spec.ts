import { EmployeeService } from "./employee.service";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { IEmployee } from "../models/employee.interface";
import { EMPLOYEES } from "api/db-data";

fdescribe("EmployeeService", () => {

  let employeeService: EmployeeService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    employeeService = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  it("should retriev random employees", () => {
    employeeService.getRandomEmployees().subscribe({
      next: (employees) => {
        expect(employees).withContext("No employees returned").toBeTruthy();
        expect(employees.length).toBeGreaterThanOrEqual(5);
        expect(employees.length).toBeLessThanOrEqual(7);
      }
    });

    const req = httpTestingController.expectOne("http://localhost:3000/employees");
    expect(req.request.method).toEqual("GET");
    req.flush(EMPLOYEES)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

})
