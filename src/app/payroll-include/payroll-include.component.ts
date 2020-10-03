import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';


@Component({
  selector: 'app-payroll-include',
  templateUrl: './payroll-include.component.html',
  styleUrls: ['./payroll-include.component.scss']
})

export class PayrollIncludeComponent implements OnInit {
  title = 'পে-রোল অন্তর্ভুক্তি';
  displayedColumns: string[] = ['id', 'name', 'designation', 'branch', 'image', 'include_in_payroll', 'self_withdraw'];
  EMPLOYEES: Employee[] = [
    {
      'id': 1,
      'name': 'Aubree Claessens',
      'designation': 'Accounting',
      'branch': 'Oba',
      'image': null,
      'include_in_payroll': false,
      'self_withdraw': false
    }, {
      'id': 2,
      'name': 'Adriane Hannigane',
      'designation': 'Human Resources',
      'branch': 'Babblestorm',
      'image': null,
      'include_in_payroll': false,
      'self_withdraw': true
    }, {
      'id': 3,
      'name': 'Michail Merrgan',
      'designation': 'Legal',
      'branch': 'Lajo',
      'image': null,
      'include_in_payroll': false,
      'self_withdraw': true
    }, {
      'id': 4,
      'name': 'Moina Thomson',
      'designation': 'Sales',
      'branch': 'Kayveo',
      'image': null,
      'include_in_payroll': true,
      'self_withdraw': true
    }, {
      'id': 5,
      'name': 'Phedra Gorringe',
      'designation': 'Services',
      'branch': 'Aimbo',
      'image': null,
      'include_in_payroll': true,
      'self_withdraw': true
    }, {
      'id': 6,
      'name': 'Elia Sunner',
      'designation': 'Product Management',
      'branch': 'Yodel',
      'image': null,
      'include_in_payroll': true,
      'self_withdraw': false
    }, {
      'id': 7,
      'name': 'Lisbeth Sackler',
      'designation': 'Sales',
      'branch': 'Skidoo',
      'image': null,
      'include_in_payroll': false,
      'self_withdraw': true
    }, {
      'id': 8,
      'name': 'Charlena McQuin',
      'designation': 'Research and Development',
      'branch': 'Ooba',
      'image': null,
      'include_in_payroll': true,
      'self_withdraw': false
    }, {
      'id': 9,
      'name': 'Carlynn McWilliam',
      'designation': 'Research and Development',
      'branch': 'Ooba',
      'image': null,
      'include_in_payroll': false,
      'self_withdraw': false
    }, {
      'id': 10,
      'name': 'Wat Wolfer',
      'designation': 'Support',
      'branch': 'Myworks',
      'image': null,
      'include_in_payroll': true,
      'self_withdraw': true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
