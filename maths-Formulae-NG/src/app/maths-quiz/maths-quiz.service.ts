import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsQuizService {

  questions = [{
    id: 0,
    task: `The circle has a radius = 5.5 cm, find the circle circumference if the π = 3.14`,
    src: `perimeter-circle.png`,
  }, {
    id: 1,
    task: `The rectangle have side A = 5 and side B = 8, find the rectange circumference`,
    src: `perimeter-rectangle.png`,
  }, {
    id: 2,
    task: `The triangle have base B = 7 and height H = 9, find the triangle area`,
    src: `area-triangle.png`,
  }, {
    id: 3,
    task: `The rectangle have width W = 5.6 and height = 4.5, find a rectange area`,
    src: `area-rectangle.png`,
  }, {
    id: 4,
    task: `The polygon have number of sides X = 6 and side A = 7.8, find the polygon perimeter`,
    src: `perimeter-polygon.png`,
  }];

  constructor() { }

  getAll() {
    return this.questions;
  }
}
