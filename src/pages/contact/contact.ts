import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  _curso : string = "";
  _codigo : string = "";
  _costo : string = "";

  private cursos = [
          {
            nombre : "Sistemas Operativos",
            codigo : "00526",
            costo : "45000"
          },

          {
            nombre : "Ingles para Informática",
            codigo : "00516",
            costo : "41000"
          },

          {
            nombre : "Ingles para Informática 2",
            codigo : "00517",
            costo : "42000"
          },

          {
            nombre : "Programación Intermedia",
            codigo : "00461",
            costo : "48000"
          },

          {
            nombre : "Programación Avanzada",
            codigo : "00560",
            costo : "49000"
          },

          {
            nombre : "Análisis de Sistemas",
            codigo : "00520",
            costo : "43000"
          },
        ]




  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {



  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Matricula Realizada!',
      subTitle: 'Su matricula fue realizada con exito',
      buttons: ['OK']
    });
    alert.present();
  }


  showAlert2() {
    let alert = this.alertCtrl.create({
      title: 'Matricula Cancelada con exito!',
      subTitle: 'Su matricula fue cancelada con exito',
      buttons: ['OK']
    });
    alert.present();
  }





  precargarCurso(curso:any ){
      this._curso = curso.nombre;
      this._codigo = curso.codigo;
      this._costo = curso.costo;
  }

}
