import React from 'react'

interface Props {
    children : React.ReactNode;
    onClick: () => void;
    color?: string;
}
const Button = ({children, onClick, color}: Props) => {
  return (
    <button type="button" className  ={`btn btn-${color}`} onClick={onClick}>{children}</button>
  )
}

export default Button