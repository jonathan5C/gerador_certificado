import { Component } from '@angular/core';
import { SecondButton } from '../../components/second-button/second-button';
import { PrimaryButton } from '../../components/primary-button/primary-button';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondButton, PrimaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css',
})
export class CertificadoForm {}
