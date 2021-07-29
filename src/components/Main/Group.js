import React from 'react'

function Group() {
    return (
        <div className='group'>
            <a className='item-group'>
                <i className='fas fa-tablet'></i>
                <div className='item-title'>Electronics</div>    
            </a>
            <a className='item-group'>
                <i className='fas fa-heart'></i>
                <div className='item-title'> Beauty and Health</div>    
            </a>
            <a className='item-group'>
                <i class="fas fa-shopping-basket"></i>
                <div className='item-title'>Supermarket</div>    
            </a>
            <a className='item-group'>
                <i class="fas fa-couch"></i>
                <div className='item-title'>Home applicances</div>    
            </a>
            <a className='item-group'>
                <i class="fas fa-tshirt"></i>
                <div className='item-title'>Cloth</div>    
            </a>
            <a className='item-group'>
                <i class="fas fa-futbol"></i>
                <div className='item-title'>Toy</div>    
            </a>
        </div>
    )
}

export default Group
