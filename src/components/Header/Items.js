import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import '../styles/Item.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Collapsed from './collapse';



class Items extends React.Component {
    
    handle(){
        return(
        this.setState({
            IsShow : !this.state.IsShow
        })
        )
    }

    constructor(props) {
        super(props)
        this.state = {
            IsShow : false
        }
    }
    
    render(){
        let className = "";
        let id = "sidebar"
        if (this.state.IsShow) {
            className= "open";
            id = ""
            } else {
            className= "";
            id = 'sidebar'
        } 
    return (
            <Navbar className="navi" bg="light" expand="lg">
                <div id={id} className={className}>
                        <div class="close-btn">
                            <a onClick={() => this.handle()}>×</a>
                        </div>
                            <ul class="sidebar-ul">
                            <li class="heading"><h6>Electronic Devices</h6></li>
                            <li><a href="#">Computers & laptops</a></li>
                            <Collapsed  title='Smart phones & accessories' item1='New Brand phones' item2='Headphones' item3='HandsFrees & Powerbanks'/>
                            <li><a href="#">Television</a></li>
                        <hr></hr>
                            <li class="heading"><a href="#"><h6>House applicances</h6></a></li>
                            <li><a href="#">Kitchen applicances </a></li>
                            <li><a href="#">Decorative supplies</a></li>
                            <li><a href="#">Sporting goods</a></li>
                        <hr></hr>
                            <li class="heading"><h6>Clothes</h6></li>
                            <Collapsed  title='Men' item1='T-shirts' item2='shirts' item3='pants'/>
                            <Collapsed  title='Women' item1='skirt' item2='dress' item3='wedding dress'/>
                            <Collapsed  title='Kid' item1='Overalls' item2='Singlet' item3='baby apron'/>
                       
                        <hr></hr>
                        <li class="heading"><h6>Written supplies & art</h6></li>
                        <li><a href="#">Books & Magazines</a></li>
                        <li><a href="#">Stationery</a></li>
                        <li><a href="#">Musical Instruments</a></li>
                        <li><a href="#">Craft</a></li>
                        <hr></hr>
                        <li class="heading"><h6>Entertainment</h6></li>
                        <li><a href="#">Games & consoles</a></li>
                        <li><a href="#">Movies & series</a></li>
                    </ul>
                </div>
                
                    <Nav>
                        <Nav.Link href="#categories" className='menu-btn'> <a onClick={() => this.handle()}><i class="fas fa-bars"></i>Categories </a></Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Top Sell</Nav.Link>
                        <Nav.Link href="#pricing">Customer Service</Nav.Link>
                        <Nav.Link href="#pricing">Sell your product</Nav.Link>
                        <Nav.Link href="#pricing">Gift Cards</Nav.Link>
                        <NavDropdown title="Help" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Returns and Refunds</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Get Product Help</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Payments & Gift Cards</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Your Orders</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                <div className="location ml-auto d-flex" title="Location">
                    <Form class='ml-auto' id='custom-form'>
                        <FormControl
                            type="search"
                            placeholder="Your location"
                            className="mr-2"
                            aria-label="Search"

                            />
                        </Form>
                    <a className="nav-link" href="#"><i class="fa fa-map-marker" aria-hidden="true"></i></a>
                </div>
            </Navbar>
            
        )
    }
}

export default Items
