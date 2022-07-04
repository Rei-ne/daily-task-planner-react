import PropTypes from 'prop-types'
import React from "react"
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <img className='headerImg' alt='logo' src='https://cdn-icons-png.flaticon.com/512/2838/2838764.png' />
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Daily Task Planner',
}

Header.propTypes = {
    title: PropTypes.string,

}

export default Header
