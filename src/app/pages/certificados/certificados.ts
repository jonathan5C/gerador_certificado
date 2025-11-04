import { Component } from '@angular/core';
import { SecondButton } from '../../components/second-button/second-button';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondButton, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {}
