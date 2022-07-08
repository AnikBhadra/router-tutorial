import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {
    return (
        <>
            <div>
                <input type="search" placeholder="Search product" />
            </div>
            <nav>
                <Link to="featured" >Featured</Link>
                {/* we can not add '/featured' because it is nested link  */}
                <Link to='new' >New</Link>
            </nav>
            <Outlet />
            {/* featured and new component don't know where to render ,so we did the Outlet for rendering*/}
        </>

    )
}

export default Products