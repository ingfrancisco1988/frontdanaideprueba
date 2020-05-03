import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
public todosLosclientes:any;
public tipoCliente;
public validandoMeses;
public clienteVip:boolean=false;
public mostrandoMesFaltante="";
public arryMeses:any=['January','February','March','Aplril','May','June','Juli','Ogost','September','October','November','Dicember']


    constructor(private clientes:ClienteService,private route:Router) {
      this.clientes.obtenerClientes().subscribe(data=>{
        
        this.todosLosclientes=data;
      }) 
  }
 

  ngOnInit(): void {
    this.inicio();
    
  }

public inicio(){
  this.clientes.obtenerClientes().subscribe(data=>{

    console.log(data);
    this.todosLosclientes=data;
  })
  
}
public  pasandoCliente(param){
  console.log(param);
  this.todosLosclientes[param]
  this.clientes.obtenerCompras( this.todosLosclientes[param].id).subscribe(data=>{
  console.log(data);
  this.validandoMeses=data;

  for(let i=0;i<this.arryMeses.length;i++){
  if(  this.arryMeses[i]!=this.validandoMeses[i].mes){
    this.mostrandoMesFaltante=this.arryMeses[i]
      this.clienteVip=true;
      this.todosLosclientes[param].tipoCliente=0;
      break;
    }
  } 
},
  err=>
  {
    console.log("mostando el error",err);

})  

this.clientes.setCliente(this.todosLosclientes[param]);

setTimeout(()=>{
  this.route.navigate(['productos']);
},2000)
}


}
