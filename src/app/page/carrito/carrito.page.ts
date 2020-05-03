import { Component, OnInit, Inject } from '@angular/core';
import { ProductoService } from 'src/app/service/productos/producto.service';
import { ClienteService } from 'src/app/service/cliente/cliente.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../listaproductos/listaproductos.page';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss']
})
export class CarritoPage implements OnInit {
  public productosSeleccionados:any; 
  public cargarSubTotal:any;
  public subtotal:number=0;
  public descuento=0;
  public descuento1;
  public cliente:any;
  public montoTotal;
public  fechaActual: Date=new Date();


  constructor(private productosService: ProductoService,private clientes:ClienteService) { 
    this.productosService.getProductos().subscribe(data=>{
      console.log("lo que estoy recibiendo de la seleccion",data);
      this.productosSeleccionados =data;
    }) 
  }

  ngOnInit(): void {
    this.inicio();
  }


  public inicio(){
    this.productosSeleccionados;
    
    this.clientes.gecliente().subscribe(data=>{
      this.cliente=data
    })

    this.calculoDeProductos();
  }

  public volverToProducto(){

  }

  public ediarCantidad(valor){

  }

  public borrarArticulo(valor){

 }

 public calculoDeProductos(){
      
  for(let i=0;i< this.productosSeleccionados.length;i++){
    this.subtotal+=(parseInt(this.productosSeleccionados[i].precio)*this.productosSeleccionados[i].cantidad);
  }
   console.log("mostando el array de subtotal",this.subtotal);
   this.montoTotal=this.subtotal
   
   if(this.productosSeleccionados.length>10 && this.cliente.tipoCliente==0){
    this.descuento=200;
    this.montoTotal = this.subtotal - this.descuento
   }
   
   if(this.productosSeleccionados.length>10 && this.cliente.tipoCliente!=0){
    this.descuento=700;
    this.productosSeleccionados.sort((a,b)=>a-b);
    this.productosSeleccionados[0].cantidad = this.productosSeleccionados[0].cantidad -1;
    this.montoTotal = this.subtotal - this.descuento;
   }
   if(this.productosSeleccionados.length==5){
    this.descuento1="20%";    
    this.montoTotal = this.subtotal-(this.subtotal*0.20)
  }
     
   }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
