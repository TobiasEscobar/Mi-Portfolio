import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss']
})
export class Contacto {
  
  contactoForm: FormGroup;
  enviando: boolean = false; // Para deshabilitar el botón mientras se envía

  // Datos ofuscados para evitar scraping
  private _mailUser = 'tobiasfabescobar';
  private _mailDomain = 'gmail.com';
  private _phonePrefix = '549'; // Prefijo Argentina
  private _phoneNumber = '1161355160';
  private _linkedinUser = 'tobias-fabricio-escobar';

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  // Función para abrir LinkedIn
  abrirLinkedin() {
    // Se construye el link al momento del click
    const url = `https://www.linkedin.com/in/${this._linkedinUser}`;
    window.open(url, '_blank');
  }

  // Función para copiar el Email (sin exponerlo en el HTML)
  copiarEmail() {
    const emailCompleto = `${this._mailUser}@${this._mailDomain}`;
    
    navigator.clipboard.writeText(emailCompleto).then(() => {
      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: 'Correo copiado al portapapeles',
        showConfirmButton: false,
        timer: 2000,
        background: '#1e293b',
        color: '#fff'
      });
    });
  }

  // Función para abrir WhatsApp o mostrar número
  abrirWhatsapp() {
    const fullNumber = `${this._phonePrefix}${this._phoneNumber}`;
    // Abre la API de WhatsApp
    const url = `https://wa.me/${fullNumber}`;
    window.open(url, '_blank');
  }

  async enviarMensaje() {
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      
      Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Por favor, completa todos los campos correctamente antes de enviar.',
        confirmButtonColor: '#38bdf8', 
        background: '#1e293b',
        color: '#fff'
      });
      return;
    }

    // 2. Preparar el envío
    this.enviando = true;
    
    // Aquí pon tus credenciales de EmailJS
    const YOUR_SERVICE_ID = environment.SERVICE_ID; 
    const YOUR_TEMPLATE_ID = environment.TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = environment.PUBLIC_KEY;

    const templateParams = {
      nombre: this.contactoForm.value.nombre,
      email: this.contactoForm.value.email,
      mensaje: this.contactoForm.value.mensaje,
      nombre_destinatario: 'Tobías' // Tu nombre para que salga en el correo
    };

    try {
      // 3. Enviar correo usando EmailJS
      await emailjs.send(
        YOUR_SERVICE_ID, 
        YOUR_TEMPLATE_ID, 
        templateParams, 
        YOUR_PUBLIC_KEY
      );

      // 4. Alerta de Éxito (SweetAlert2)
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: 'Gracias por contactarme. Te responderé a la brevedad.',
        confirmButtonColor: '#38bdf8',
        background: '#1e293b',
        color: '#fff'
      });

      this.contactoForm.reset(); // Limpiar formulario

    } catch (error) {
      console.error('Error al enviar:', error);
      
      // Alerta de Fallo de Red
      Swal.fire({
        icon: 'error',
        title: 'Error de envío',
        text: 'Hubo un problema al enviar el correo. Por favor intenta más tarde.',
        confirmButtonColor: '#d33',
        background: '#1e293b',
        color: '#fff'
      });
    } finally {
      this.enviando = false; // Reactivar botón
    }
  }
}