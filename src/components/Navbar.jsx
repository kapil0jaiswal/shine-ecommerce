import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul>
        <a href='/'><li>Home</li></a>
        <a href='/about'><li>About</li></a>
        <a href='/contacts'><li>Contacts</li></a>
        <a href='/cart'><li>Cart</li></a>
        <a href='/wishlist'><li>WishList</li></a>
        <a href='/category'><li>Category</li></a>
      </ul>
    </div>
  )
}

export default Navbar
