import { Component, OnInit, Inject } from '@angular/core'; 
import { VentaService } from 'src/app/service/ventas/venta.service';
import { MatDialog } from '@angular/material/dialog';
 
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductoService } from 'src/app/service/productos/producto.service';
 
import { Router } from '@angular/router';
export interface DialogData {
  stock: number;
  index: number;
  valorRecibido:number;
}

export interface CargaProducto {
  id: number;
  descripcion: string;
  precio:number;
  codProducto:number;
  cantidad:number;
}

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.page.html',
  styleUrls: ['./listaproductos.page.scss']
})
export class ListaproductosPage implements OnInit {
   
  public mostrarProductos:any;
  public stockProduco:any;
  public idProducto:any;
  public valorDevuelto:any;
  public constructorProducto:CargaProducto;
  public arryDePase:any=[];

  constructor(private producto:VentaService,
    public dialog: MatDialog, 
    private productosService: ProductoService,
    private root:Router) { }

  ngOnInit(): void {
    this.inicio();
  }

  public inicio(){
    this.producto.obtenerProductos().subscribe(data=>{
      console.log(data)
      this.mostrarProductos=data
    },
    err=>{
      this.mostrarProductos=null;
    });

  }

  public irAlCarrito(){
    this.productosService.setProducto(this.arryDePase);
    this.root.navigate(['vercompra']);
  }

  public enviarstock(param, indice){
    console.log("mostrando los valores recibidos", param);
    console.log("mostrando los valores recibidos", indice);

    this.stockProduco=param;
    this.idProducto=indice;
    this.openDialog();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {stock: this.stockProduco, index: this.idProducto}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Se Cerro el dialogo');
      this.valorDevuelto = result;
      if( this.valorDevuelto!=0 && this.valorDevuelto!=undefined &&this.valorDevuelto!=null )
      this.cargarArray();
    });

}

public cargarArray(){
  this.mostrarProductos[this.idProducto];
console.log()

  this.mostrarProductos[this.idProducto].cantidad=this.mostrarProductos[this.idProducto].cantidad-this.valorDevuelto
  
  this.constructorProducto={
    id: this.mostrarProductos[this.idProducto].id,
  descripcion: this.mostrarProductos[this.idProducto].descripcion,
  precio:this.mostrarProductos[this.idProducto].precio,
  codProducto:this.mostrarProductos[this.idProducto].codProducto,
  cantidad:this.valorDevuelto
  }

  this.arryDePase.push(this.constructorProducto);
  console.log("Mostrando productos cargados ",this.arryDePase);   
}

 
}//final de la seccion


 

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}