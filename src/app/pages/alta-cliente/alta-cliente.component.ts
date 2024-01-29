import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Models/cliente';
import { TipoCliente } from '../../Models/tipo_cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent implements OnInit{

  // Propiedades
  cliente!:Cliente;
  tipos:TipoCliente[]=[];

  // Contructor 
  constructor (private clienteService:ClienteService){}

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.tipos = this.clienteService.getTipos();
  }

  // Método para insertar un cliente desde el formulario 
  insertarCliente(){
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }

}