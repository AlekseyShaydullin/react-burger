import React from 'react';
import style from './NavLink.module.css';
import PropTypes from 'prop-types';

function NavLink({ icon, text }) {
  return (
    <a className={style.link} href='#'>
      {icon}
      <p className={style.caption}>{text}</p>
    </a>
  )
}

NavLink.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string
}

export default NavLink;