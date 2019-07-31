import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
 
class Menu extends Component {
     
    constructor(props) {
        super(props);

        this.state = {
            selectedDish : null
        }
        console.log('constructor')
      }

      onDishSelect(dish) {
          this.setState({selectedDish:dish});
      }

      componentDidMount() {
          console.log('componentDidMount')
      }

      renderDish(dish) {
            if(dish != null) {
                return(
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            }
            else {
                return(
                    <div></div>
                );
            }
      }
    
 
     render() {
        console.log('render')

        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-sm-5 mt-1" > 
                <Card onClick={() => this.onDishSelect(dish) }>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                     <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                     </CardImgOverlay>
                 </Card>
            </div>
            );
         });

        return(
            <div className="container">
            <div className="row">
                   {menu}
            </div>
            <div className="row">
                    {this.renderDish(this.state.selectedDish)}
            </div>
            </div>
        );
     }
 }

 export default Menu;