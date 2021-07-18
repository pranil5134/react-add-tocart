import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import StarRatings from 'react-star-ratings';
import{useState} from 'react';
import Menu from './Menu';
class Cards extends React.Component {
  array =[]
constructor(props){
  super(props);
  
  this.state={
    rating: "newRating",
     data : 0,
     Items : [
      {
        "name": "Fancy Product",
        "price": "$40.00 - $80.00",
        "buttonlabel": "View options"
  
      },
      {
        "name": "Special Item",
        "originalprice": "$20.00",
        "price": "$18.00",
        "buttonlabel": "Add to cart",
        "sale": "Sale",
        "starrating":3.6
  
      },
      {
        "name": "Sale Item",
        "originalprice": "$50.00",
        "price": "$25.00",
        "buttonlabel": "Add to cart",
        "sale": "Sale",
        "starrating":4.5
  
      },
      {
        "name": "Popular Item",
        "price": "$40.00",
        "buttonlabel": "Add to cart",
        "starrating":5
  
      },
      {
        "name": "Sale Item",
        "originalprice": "$50.00",
        "price": "$25.00",
        "buttonlabel": "View options",
        "sale": "Sale"
  
      },
      {
        "name": "Fancy Product",
        "price": "$120.00 - $280.00",
        "buttonlabel": "View options"
  
      },
      {
        "name": "Special Item",
        "originalprice": "$20.00",
        "price": "$18.00",
        "buttonlabel": "Add to cart",
        "sale": "Sale",
        "starrating":4.2
  
      },
      {
        "name": "Popular Item",
        "price": "$40.00",
        "buttonlabel": "Add to cart",
        "starrating":5 
      }
    ]
  }

}

 
changeRating( newRating, name ) {
  this.setState({
    rating: newRating
  });
}

 async addtocart  (leabel)  {
  await this.setState({ data : this.state.data+1})
  console.log(this.state.data)
    console.log("hello", leabel)
  }


 getdata = () => {
    //const Item1=Items[0];
    console.log(this.state.Items, "Hello");
  }

 
  
 render(){
  let i=1;
  return (
    
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {

            this.state.Items.map((element,id) => {
              return (
              
                <div class="col mb-5">
                  <div class="card h-100 ml-1" key ={id}>
                    <div class="badge bg-dark text-white position-absolute" style={{ top: 0.5 + 'rem', right: 0.5 + 'rem' }}>{element.sale}</div>
                    <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                    <div class="card-body p-4">
                      <div class="text-center">

                        <h5 class="fw-bolder">{element.name}</h5>
                        {(() =>{if(element.buttonlabel=="Add to cart"){
                            return(
                              <StarRatings
                                rating={ element.starrating}
                                starRatedColor="Gold"
                                starDimension="20px"
                                starSpacing="5px"
                    />
                            )
                        }})()}
                                      

                        <del>{element.originalprice}</del> {element.price}
                      </div>
                    </div>

                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      {
                     
                        (() => {
                             
                          if(id==this.props.disableToChild)
                          {
                            i=i+1
                            console.log("if",id)
                            if(this.props.buttonlabel=="Add to cart")
                            {
                              if(!this.array.includes(id))
                              {
                                {this.array.push(id)}
                              }                      
                              {console.log(this.array)}
                            return(
                              <>
                              <div class="text-center"><button id = {id} disabled={true} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart(element.buttonlabel,id)}>{element.buttonlabel}</button></div>
                              <br></br>
                              <div class="text-center"><button id = {id} disabled={false} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart("Remove from cart",id)}>Remove from cart</button></div>
                              </>
                            )
                          }
                          else{
                            if(this.array.includes(id))
                              {
                                {this.array.pop(id)}
                              }  
                            return(
                              <>
                              <div class="text-center"><button id = {id} disabled={false} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart(element.buttonlabel,id)}>{element.buttonlabel}</button></div>
                              
                              </>
                            )
                          }
                          }
                          else{
                            if(this.array.includes(id))
                            {
                          return(
                            <>
                            <div class="text-center"><button id = {id} disabled={true} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart(element.buttonlabel,id)}>{element.buttonlabel}</button></div>
                            <br></br>
                            <div class="text-center"><button id = {id} disabled={false} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart("Remove from cart",id)}>Remove from cart</button></div>
                            </>
                          )
                          }
                            console.log("else",this.props.disableToChild,i)
                                return(
                                  <div class="text-center"><button id = {id} disabled={false} class="btn btn-outline-dark mt-auto" onClick={() => this.props.addtocart(element.buttonlabel,id)}>{element.buttonlabel}</button></div>
                                )
                          }
                        })()
                      }
                    
                      {/**/}
                    </div>
                  </div>
                </div>

              )

            })
          }


        </div>
      </div>
     
    </section>
  );

 }
  
}

export default Cards;
