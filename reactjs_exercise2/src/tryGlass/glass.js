import React, { Component } from 'react'
export default class Glass extends Component {  
    clickGlass=(item)=>{
        this.props.getGlass(item); 
        console.log(item);       
    }
    render(){
    const {glass}=this.props;  
        
    return(      
        <>    
            <a href="" onClick={(e)=>{
                e.preventDefault()
                this.clickGlass(glass)
                }}>
                <img src={glass.url} 
                style={{
                    display:"flex",
                    width:"115px",
                   
                }}/>
            </a>
                     
        </>
    );
  }
}
