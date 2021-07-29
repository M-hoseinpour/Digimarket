import React, {useState} from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import '../styles/Navbar.css';
import { useStateValue } from '../StateProvider';
import { Link } from "react-router-dom";
 


function Navbar() {
    const [search, setSearch] = useState('All');
    const [{basket, item}] = useStateValue();
    
    
    return (
        <div className='top'>
            <div className='logo'>
                <Link to='/Digimarket'><p>digimarket</p></Link>
            </div>
            <div className='search-bar'>
                <InputGroup>
                    <DropdownButton
                        title={search}
                        id="input-group-dropdown-1"
                        >
                        <Dropdown.Item href="#" onClick={() => setSearch('All')}>All</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Arts and Crafts')}>Arts and Crafts</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Electronics')}>Electronics</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch("Women's Fashion")}>Women's Fashion</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Health and Household')}>Health and Household</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Movies and TV')}>Movies and TV</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Personal Care')}>Personal Care</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Sports')}>Sports</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={() => setSearch('Tools')}>Tools</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-label="Text input with dropdown button" placeholder='Search' />
                    <Button><i class="fas fa-search " aria-hidden="true"></i></Button>

                </InputGroup>
            </div>
            <div className='social-media'>
                <ul className='social-media-icons'>
                    <li>
                    <a href='#'><i className='fab fa-facebook'></i></a>
                    </li>
                    <li>
                    <a href='#'><i className='fab fa-twitter'></i></a>
                    </li>
                    <li>
                    <a href='#'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                    <a href='#'><i className='fab fa-telegram'></i></a>
                    </li>
                </ul>
            </div>
            <div className='icon-group' >
                <ul className='icon-ul'>
                    <li className='active'><Link to='/checkout'><i className='fas fa-shopping-cart'></i><small className='number'>{item}</small></Link></li>
                    <li><Link to='/login'><i className='fas fa-user'></i></Link></li>
                </ul>
            </div>
            <div className='shopel'>
                <Link to='/checkout'><i className='fas fa-shopping-cart'></i></Link>
            </div>
        </div>
    )}


export default Navbar
