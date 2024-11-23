
import React from 'react'
import { Product as ProductType } from '../types/ProductType'


interface NavBarProps {
    setQuery?: Function
    show: { dropDown: boolean, search: boolean }
    query?: string
    products?: ProductType[]
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setQuery?.(event.target.value)
    }

    const handleDropDown = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, value: string) => {
        props.setQuery?.(value)
    }

    return (<>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Navbar</a>
            {props.show.dropDown &&
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"

                    >
                        Dropdown button
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <li><a className="dropdown-item" onClick={(e) => { handleDropDown(e, 'beauty') }}>beauty</a></li>
                        <li><a className="dropdown-item" onClick={(e) => { handleDropDown(e, 'fragrances') }} >fragrances</a></li>
                        <li><a className="dropdown-item" onClick={(e) => { handleDropDown(e, 'furniture') }} >furniture</a></li>
                    </ul>
                </div>
            }
            {props.show.search &&
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={props?.query}
                        onChange={handleValueChange}
                    />
                </form>
            }
        </nav>
    </>);
}

export default NavBar;