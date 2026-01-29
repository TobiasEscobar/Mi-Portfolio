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
      mensaje: ['', [Validators.required, Validators.minLength(5)]],
      website: [''] // Campo oculto para bots
    });
  }

  // Abrir LinkedIn
  abrirLinkedin() {
    // Se construye el link al momento del click
    const url = `https://www.linkedin.com/in/${this._linkedinUser}`;
    window.open(url, '_blank');
  }

  // Copiar el Email al portapapeles
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

  // Abrir WhatsApp
  abrirWhatsapp() {
    const fullNumber = `${this._phonePrefix}${this._phoneNumber}`;
    // Abre la API de WhatsApp
    const url = `https://wa.me/${fullNumber}`;
    window.open(url, '_blank');
  }

  async enviarMensaje() {

    // Verificar campo oculto (honeypot)
    if (this.contactoForm.value.website) {
      console.warn('Se detectó un bot. Envío cancelado.');
      return;
    }

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

    // Preparar para enviar
    this.enviando = true;
    
    // Credenciales de EmailJS
    const MY_SERVICE_ID = environment.SERVICE_ID; 
    const MY_TEMPLATE_ID = environment.TEMPLATE_ID;
    const MY_PUBLIC_KEY = environment.PUBLIC_KEY;
    const MY_TEMPLATE_AUTOREPLY = environment.TEMPLATE_ID_AUTOREPLY;

    const templateParams = {
      nombre: this.contactoForm.value.nombre,
      email: this.contactoForm.value.email,
      mensaje: this.contactoForm.value.mensaje,
      nombre_destinatario: 'Tobías Fabricio Escobar'
    };

    try {
      // Enviarme correo usando el servicio de EmailJS
      await emailjs.send(
        MY_SERVICE_ID, 
        MY_TEMPLATE_ID, 
        templateParams, 
        MY_PUBLIC_KEY
      );

      // Enviar correo de auto-respuesta al usuario
      await emailjs.send(
        MY_SERVICE_ID,
        MY_TEMPLATE_AUTOREPLY,
        templateParams,
        MY_PUBLIC_KEY
      );

      // Modal de exito 
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
      
      // Modal de Fallo de Red
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