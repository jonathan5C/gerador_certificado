import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { PrimaryButton } from './components/primary-button/primary-button';
import { SecondButton } from './components/second-button/second-button';
import { ItemCertificado } from './components/item-certificado/item-certificado';
import { BaseUi } from './components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    CommonModule,
    PrimaryButton,
    SecondButton,
    ItemCertificado,
    BaseUi,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificado');
  public readonly exibeNavBar: boolean = true;
}
