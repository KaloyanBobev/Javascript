import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {

  infos = [{
    header: `The Perimeter of Square`,
    information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
    formula: `P = 4 * A`,
    explanation: `A is the length of one of the sides.`,
    src: `perimeter-square.png`
  }, {
    header: `The perimeter of Circle`,
    information: `Perimeter is a length around the circle. `,
    formula: `P = 2 *π * R`,
    explanation: `π is constant  equal on 3,1415926535, R is a radius of a circle .`,
    src: `perimeter-circle.png`
  }, {

    header: `The Perimeter of Triangle`,
    information: `Perimeter is the sum of three sides of triagle.`,
    formula: `P = A + B + C`,
    explanation: `A, B and C are the length of each of the sides.`,
    src: `perimeter-triangle.png`
  }, {

    header: `The Perimeter of Rectangle`,
    information: `Perimeter is the sum of two times length and two times width. `,
    formula: `P = 2 * A + 2 * B `,
    explanation: `A is a length and B is a width.`,
    src: `perimeter-rectangle.png`
  }, {

    header: `The Perimeter of regular Polygon`,
    information: `Perimeter is the sum all equal sides of polygon.`,
    formula: `P = X * A `,
    explanation: `A is a length of one of the sides and X is number of the sides.`,
    src: `perimeter-polygon.png`
  }, {

    header: `The Area of Square`,
    information: `A Square is a regular rectangle but have four equal sides A with 90 degrees angles. `,
    formula: `Area =  A * A`,
    explanation: `A is the length of one of the sides.`,
    src: `area-square.png`
  }, {
    header: `The Area of Circle`,
    information: `The area of a circle is encolsed from his perimeter. `,
    formula: `Area = π * R * R`,
    explanation: `π is constant equal on 3,1415926535, R is a radius of a circle .`,
    src: `perimeter-circle.png`
  }, {

    header: `The Area of Triangle`,
    information: `This is a polygon with three vertices and  three edges.`,
    formula: `Area = 1/2 * B * H`,
    explanation: `B is a length of the base and H is vertical hight.`,
    src: `area-triangle.png`
  }, {

    header: `The Area of Rectangle`,
    information: ` Rectange is a quadrilateral with four right angles `,
    formula: `Area = W * H `,
    explanation: `W is a width and H is a height.`,
    src: `area-rectangle.png`
  }, {

    header: `The Area of regular Polygon`,
    information: `A regular polygon is a polygon where each of the sides have the same length and also equal angles`,
    formula: `Area = 1/2 * P * A `,
    explanation: `P is a perimeter and A is for apothem.`,
    src: `area-polygon.png`
  }];


  constructor() { }

  getAll() {
    return this.infos;
  }
}
