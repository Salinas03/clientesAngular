import { Injectable } from '@angular/core';
import { Cliente } from '../Models/cliente';
import { TipoCliente } from '../Models/tipo_cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes:Cliente[]=[];
  private tipos:TipoCliente[]=[];

  constructor() { 
    this.clientes=[];

    this.tipos=[
      {
        id:0,
        descripcion:'Sin definir'
      },
      {
        id:1,
        descripcion:'Clientes Activos'
      },
      {
        id:2,
        descripcion:'Clientes Inactivos'
      },
      {
        id:3,
        descripcion:'Clientes Deudores'
      }
    ];
  }

  // Método para retornar el arreglo de clientes 
  getClientes(){
    return this.clientes;
  }
  
  // Método que retorne los tipos de cliente
  getTipos(){
    return this.tipos;
  }

  // Método que agregue un cliente al arreglo
  agregarCliente(cliente:Cliente){
    this.clientes.push(cliente);
  }

  // Método que inicializa un cliente nuevo 
  nuevoCliente():Cliente{
    return{
      id:this.clientes.length+1,
      nombre:'',
      rfc:'',
      domicilio:'',
      tipoCliente:0
    };
  }
}