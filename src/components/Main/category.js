import React from 'react'

function Category(props) {
    return (
        <div className='category_section'>
            <div className='category-img'>
                <img src={props.img}/>
            </div>
            <div className='category_title'>
                <h5>
                    {props.title}
                </h5>
            </div>
        </div>
    )
}

export default Category
