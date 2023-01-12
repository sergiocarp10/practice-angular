import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, CollectionReference, addDoc, updateDoc, QuerySnapshot, DocumentReference, deleteDoc } from '@angular/fire/firestore';
import { Line } from './lines/Line';

@Injectable({
  providedIn: 'root'
})
export class LinesApiService {
  linesCollection: CollectionReference<Line>
  docs: DocumentReference<Line>[] = []

  constructor(private db: Firestore) {
    this.linesCollection = collection(db, 'lines') as CollectionReference<Line>
  }

  async getLines(){
    const result = await getDocs(this.linesCollection)
    result.forEach((doc) => this.docs.push(doc.ref))

    return result
  }

  addLine(line: Line){
    addDoc(this.linesCollection, line).then((doc) => {
      console.log('line added: ', doc.id);
      this.docs.push(doc)
    }).catch(e => {
      console.log('add line error', e)
    })
  }

  updateLine(line: Line, index: number){
    updateDoc(this.docs[index], line).then((doc) => {
      console.log('line updated', doc);
      
    }).catch(e => {
      console.log('update line error', e);
      
    })
  }

  removeLine(index: number){
    deleteDoc(this.docs[index]).then((doc) => {
      this.docs.splice(index, 1)
      console.log('line deleted', doc);
      
    }).catch(e => {
      console.log('error', e);
      
    })
  }
}
