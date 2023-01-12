import { Component } from '@angular/core';
import { LinesApiService } from '../lines-api.service';
import { Line } from "./Line";

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent {
  lines: Line[] = [];
  default_color: string = "rgba(0, 150, 0, 0.7)"

  colors_available: string[] = [
    "rgba(150, 0, 0, 0.7)", "rgba(0, 150, 0, 0.7)", "rgba(0, 0, 150, 0.7)",
    "rgba(150, 150, 0, 0.7)", "rgba(0, 150, 150, 0.7)", "rgba(150, 0, 150, 0.7)"
  ]

  constructor(private linesApi: LinesApiService){
    // get from firestore
    linesApi.getLines().then((docs) => {
      docs.forEach(doc => this.lines.push(doc.data()))
    })
  }

  getColor(num: number){
    return this.colors_available[num]
  }

  changeColor(line: Line){
     // update variable and UI
     line.color = (line.color + 1) % this.colors_available.length

    // update on firestore
    const index: number = this.lines.indexOf(line)
    this.linesApi.updateLine(line, index)
  }

  // Atención: input es el elemento HTML del form
  addLine(input: HTMLInputElement) {
    let text = input.value.trim()

    if (text){
      const line: Line = {name: text, color: Math.round(Math.random() * this.colors_available.length)}

      // upload to firestore
      this.linesApi.addLine(line)

      // add to UI
      this.lines.push(line)

      // clear form
      input.value = ""
    }

    // set cursor on input again
    input.focus()

    // prevent default
    return false
  }

  deleteLine(line: Line){
    let index: number = this.lines.indexOf(line)
    this.lines.splice(index, 1)

    // delete on firestore
    this.linesApi.removeLine(index)
  }
}
