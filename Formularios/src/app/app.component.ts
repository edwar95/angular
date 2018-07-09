import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  email;
  password;
  passwordConfirmation;

  ingresarUsuario(formulario) {

    const valorActualPassword = formulario
      .controls.password.value;
    const valorActualPasswordConfirmation = formulario.controls.passwordConfirmation.value;

    if (valorActualPassword === valorActualPasswordConfirmation) {
      alert('BIEN!');
    } else {
      alert('Los passwords no son iguales');
    }

  }
}
