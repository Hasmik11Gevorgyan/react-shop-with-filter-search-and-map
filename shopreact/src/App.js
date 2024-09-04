import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Items from './items';
import Categories from './components/Categories';

 class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[

      ],
      items:[
        {
          id:"1",
          title: "chairs",
          descr :"lorem ispum",
          img: "zz.jpg",
          category: "chairs",
          price : 49.9

        },
        {
          id:"2",
          title: "table",
          descr :"lorem ispum",
          img: "x.jpg",
          category: "chairs",
          price : 134.9

        },
        {
          id:"3",
          title: "chairs",
          descr :"lorem ispum",
          img: "aa.jpg",
          category: "lights",
          price : 99.9

        },
        {
          id:"4",
          title: "chairs",
          descr :"lorem ispum",
          img: "ccc.jpg",
          category: "Sofas",
          price : 29.9

        },
        {
          id:"5",
          title: "chairs",
          descr :"lorem ispum",
          img: "x.jpg",
          category: "tables",
          price : 89.9

        },
        {
          id:"6",
          title: "chairs",
          descr :"lorem ispum",
          img: "yy.jpg",
          category: "chairs",
          price : 60.9

        },

      ] 
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
  return (
    <div className='wrapper' >
      Shop
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder} />
      <Categories chooseCategory ={this.chooseCategory}/>
      <Items items = {this.state.currentItems}  onAdd = {this.addToOrder} />
      <Footer/>
    </div>
  );
}

chooseCategory(category){
  if(category === "all"){
    this.setState({currentItems: this.state.items})
    return
  }
 this.setState({
  currentItems: this.state.currentItems.filter(el => el.category === category)
 })
}


deleteOrder (id){
this.setState({orders: this.state.orders.filter(el => el.id!==id)})
}



addToOrder(item){
  let isInArray = false;
  this.state.orders.forEach(el =>{
    if(el.id === item.id){
     isInArray = true
    }
  })
  if(!isInArray){
 this.setState({orders:[...this.state.orders, item]})}
}
}

export default App;
