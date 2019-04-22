import React from 'react'

export default ({ classNames, to, onClick }) => (
    <i className={`material-icons ${classNames}`} onClick={onClick}>{to}</i>
)