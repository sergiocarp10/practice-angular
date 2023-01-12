import { Injectable } from '@angular/core';
import { collection, Firestore, getDocs, CollectionReference } from '@angular/fire/firestore';
import { Line } from './lines/Line';

@Injectable({
  providedIn: 'root'
})
export class LinesApiService {
  linesCollection: CollectionReference<Line>
  savedLines: Line[] = []

  constructor(private db: Firestore) {
    this.linesCollection = collection(db, 'lines') as CollectionReference<Line>
  }

  async getLines(){
    return (await getDocs(this.linesCollection))

    const querySnapshot = await getDocs(this.linesCollection)

    if (querySnapshot.empty){
      console.log("no hay documentos");
    } else {
      querySnapshot.forEach((doc) => {
        console.log("documento: " + doc.get('name'))
        this.savedLines.push(doc.data())
      })
    }    
  }
}
