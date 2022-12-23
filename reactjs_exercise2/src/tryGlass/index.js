import React, { Component } from 'react'
import data from './data.json'
import Glass from './glass'
export default class TryGlasses extends Component {
  constructor(props){
    super(props);
    this.state={
      listItem:data,
      item:null,
    }
  };  
  clickGlass=(item)=>{    
    this.setState({
      item,
    })
  } ;
  renderItem=()=>{
    const {listItem}=this.state;    
    return(
      listItem.map((item)=>{
        return <Glass key={item.id} glass={item} getGlass={this.clickGlass}/>
      })
    )     
  };  
   
  render(){
    const {item}=this.state;   
    console.log({item});
    if(item===null){
      return(
        <>       
           <div className="container vglasses py-3">
              <div className="row  justify-content-between">
                  <div className="col-6 vglasses__right p-0">
                      <div className="vglasses__card">
                          <div className="mb-2 text-right mt-2 mr-2">
                              
                          </div>
                          <div className="vglasses__model" id="avatar">
                              
                          </div>
                          
                      </div>
                  </div>
                  <div className="col-6 vglasses__right p-0">
                      <div className="vglasses__card">
                          <div className="mb-2 text-right mt-2 mr-2">
                              
                          </div>
                          <div className="vglasses__model" id="avatar">
                              
                          </div>
                          <div id="glassesInfo" className="vglasses__info">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="vglasses__left">
                      <div className="row">
                          <div className="col-12">
                              <h1 className="mb-2">Virtual Glasses</h1>
                          </div>
                      </div>
                      <div className="row" id="vglassesList">
                          {this.renderItem()}
                      </div>
              </div>
          </div>
  
        </>
      );
    }
    else{
      return(
        <>       
           <div className="container vglasses py-3">
              <div className="row  justify-content-between">
                  <div className="col-6 vglasses__right p-0">
                      <div className="vglasses__card">
                          <div className="mb-2 text-right mt-2 mr-2">
                              
                          </div>
                          <div className="vglasses__model" id="avatar">
                              
                          </div>
                          
                      </div>
                  </div>
                  <div className="col-6 vglasses__right p-0">
                      <div className="vglasses__card">
                          <div className="mb-2 text-right mt-2 mr-2">
                              
                          </div>
                          <div className="vglasses__model" id="avatar"> 
                            <img src={item.url}/>                                                       
                          </div>
                          <div id="glassesInfo" className="vglasses__info">
                          </div>
                      </div>
                  </div>
              </div>
              <div className="vglasses__left">
                      <div className="row">
                          <div className="col-12">
                              <h1 className="mb-2">Virtual Glasses</h1>
                          </div>
                      </div>
                      <div className="row" id="vglassesList">
                          {this.renderItem()}
                      </div>
              </div>
          </div>
  
        </>
      );
    }        
  };
}

