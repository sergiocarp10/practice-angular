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

  constructor(){
    
  }

  // Atención: input es el elemento HTML del form
  addLine(input: HTMLInputElement) {
    let text = input.value.trim()

    if (text){
      this.lines.push({name: text, color: this.default_color})

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
