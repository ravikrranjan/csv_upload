import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
// import BasicTable from './Displaycsv';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

class Dropfile extends Component {

  constructor(props) {
      super(props);
      this.state = {loadingImage: false};
    };

    onDrop(files) {
      debugger;
      let file = files[0];
      let reader = new FileReader();



      this.state={
        loadingImage: true
      };

      reader.onload = data => {
        debugger;
      const csvdata = data.currentTarget.result;
    let csvdatasplit=  csvdata.split(/\r\n|\n/);
      let cscdaataarr = [...csvdatasplit]
    let  filedata=[];
      for(let i = 0;i < csvdatasplit.length; i++)   {
        let data = csvdatasplit[i].split(',');
          let d = {...data};
            filedata.push({

                id: id,
                name: 'Item name ' + id,
                price: 2100 + i
              
            })
        // console.log(data);
      }
      this.setState({
        products: filedata
      });
      console.log(filedata);
      // for(let data of cscdaataarr) {
      //
      //   console.log(data)
      //   debugger;
      // }



          this.setState({
            loadingImage: false
          });


          reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    };
      reader.readAsBinaryString(file);

  }



  render() {
    return (
  <div className="DropFile">
        <div>
        <Dropzone onDrop={this.onDrop} className="dropZone">
        {this.state.loadingImage ? 'Processing...' : 'Drop file here or click to add file.'}
       </Dropzone>
        </div>

      <BootstrapTable data={ this.state.products }>
          <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}

export default Dropfile;
