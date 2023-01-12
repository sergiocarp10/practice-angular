import { Component } from '@angular/core';
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

  constructor(){
    
  }

  getColor(num: number){
    return this.colors_available[num]
  }

  changeColor(line: Line){
    line.color = (line.color + 1) % this.colors_available.length
  }

  // Atención: input es el elemento HTML del form
  addLine(input: HTMLInputElement) {
    let text = input.value.trim()

    if (text){
      this.lines.push({name: text, color: 1})

      // clear form
      input.value = ""
    }

    // set cursor on input again
    input.focus()

    // prevent default
    return false
  }

  deleteLine(line: Line){
    for (let i = 0; i < this.lines.length; i++) {
      const element: Line = this.lines[i];
      if (element == line) this.lines.splice(i, 1)
    }
  }
}
