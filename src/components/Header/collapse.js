import {React, useState}  from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'


function Collapsed(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant='none'
          className='toggle-btn'
        >
          {props.title} <i class="fal fa-angle-down arrow"></i>
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <ul>
                <li marker='none'>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
                
            </ul>
          </div>
        </Collapse>
      </>
    );
  }

export default Collapsed
