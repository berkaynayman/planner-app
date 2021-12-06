import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  dataPlan = [
    {
      id:1,
      desc: "Erken kalk",
      date: "2021-12-07"
    },
    {
      id:2,
      desc: "Okula git",
      date: "2021-12-07"
    },
    {
      id:123,
      desc: "Toplantıya git",
      date: "2021-12-08"
    },
    {
      id:234,
      desc: "Sunuma katıl",
      date: "2021-12-08"
    },
    {
      id:3,
      desc: "Sinemaya git",
      date: "2021-12-12"
    },
    {
      id:3432,
      desc: "Sergiye katıl",
      date: "2021-12-14"
    },
    {
      id:3123,
      desc: "Maça git",
      date: "2021-12-15"
    }
  ]

  plan: any;
  todayNow = Date.now();

  planAdd(planDesc: any, planDate: any){
    if(planDesc.value !== "" && planDate.value !== ""){
      this.plan = {
        id: Date.now(),
        desc: planDesc.value,
        date: planDate.value,
        done: false
      }
      this.dataPlan.push(this.plan)
      planDesc.value = "";
      planDate.value = "";
      this.todayPlanList();
      this.tomorrowPlanList();
      this.weekPlanList();
    }
  }

  

  //code for list
  myDate = new Date();
  today: any
  tomorrow: any
  weekDate: any
  todayPlan: any
  tomorrowPlan: any
  weekPlan: any

  todayPlanList(){
    this.todayPlan = this.dataPlan.filter((item) => item.date === this.today)
  }
  
  tomorrowPlanList(){
    this.tomorrowPlan = this.dataPlan.filter((item) => item.date === this.tomorrow)
  }

  weekPlanList(){
    this.weekPlan = this.dataPlan.filter((item) => item.date > this.tomorrow && item.date <= this.weekDate)
  }

  constructor() { }

  ngOnInit(): void {
    this.today = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.tomorrow = formatDate(this.myDate.setDate(this.myDate.getDate()+1), 'yyyy-MM-dd', 'en')
    this.weekDate = formatDate(this.myDate.setDate(this.myDate.getDate()+7), 'yyyy-MM-dd', 'en')    

    this.todayPlanList();
    this.tomorrowPlanList();
    this.weekPlanList();
  }

}
