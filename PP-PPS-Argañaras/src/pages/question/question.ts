import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Global} from '../global/global';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})

export class QuestionPage {
  constructor(public navCtrl: NavController) {
  }

    user = Global.Usuario.user;
    Question = this.RandomQuestion();
    Respuestas={correctas:0,incorrectas:0};
    buttonDisabled=false;

    RandomQuestion()
    {
       return {pregunta:"¿soy una pregunta?", opcion1:"la de abajo", opcion2: "mas abajo", opcion3:"ya casi, abajo",opcion4:"soy la respuesta", respuesta:"opcion4"};
    }

    Answer(respuesta, opcion)
    {
      if(opcion == this.Question.respuesta)
      {
          console.log("respuesta correcta");
          document.getElementsByName(opcion).item(0).style.backgroundColor = "green";        
          this.Respuestas.correctas++;
      }
      else
      {
          console.log("respuesta incorrecta");
          document.getElementsByName(opcion).item(0).style.backgroundColor = "red";
          document.getElementsByName(this.Question.respuesta).item(0).style.backgroundColor = "green";
          this.Respuestas.incorrectas++;
      }
          this.ActivarDesactivarBotones();
        !this.buttonDisabled;
    }

     LimpiarBotones()
    {
        document.getElementById("ionSiguiente").hidden=!this.buttonDisabled;
         document.getElementsByName('opcion1').item(0).style.backgroundColor = "#008ae6";
         document.getElementsByName('opcion2').item(0).style.backgroundColor = "#008ae6";
         document.getElementsByName('opcion3').item(0).style.backgroundColor = "#008ae6";
         document.getElementsByName('opcion4').item(0).style.backgroundColor = "#008ae6";
         this.ActivarDesactivarBotones();
         this.Question = this.RandomQuestion();
    }

    ActivarDesactivarBotones()
    {
        this.buttonDisabled = (!this.buttonDisabled)
        document.getElementById("ionSiguiente").hidden=!this.buttonDisabled;
    }
}