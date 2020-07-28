import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsQuizService {
  array = [34.54, 26, 31.5, 25.2, 46.8];
  questions = [{
    id: 0,
    task: `The circle has a radius = 5.5 cm, find the circle circumference if the π = 3.14`,
    src: `perimeter-circle.png`,
    answer: 'array[0]'
  }, {
    id: 1,
    task: `The rectangle have side A = 5 and side B = 8, find the rectange circumference`,
    src: `perimeter-rectangle.png`,
    answer: 'array[1]'
  }, {
    id: 2,
    task: `The triangle have base B = 7 and height H = 9, find the triangle area`,
    src: `area-triangle.png`,
    answer: 'array[2]'
  }, {
    id: 3,
    task: `The rectangle have width W = 5.6 and height = 4.5, find a rectange area`,
    src: `area-rectangle.png`,
    answer: 'array[3]'
  }, {
    id: 4,
    task: `The polygon have number of sides X = 6 and side A = 7.8, find the polygon perimeter`,
    src: `perimeter-polygon.png`,
    answer: 'array[4]'
  }];

  constructor() { }

  getAll() {
    return this.questions;
  }
}
