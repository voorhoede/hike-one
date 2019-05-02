import React from 'react'

const TextCard = ({ title='', text='' }) => (
  <div className="text-card shadow">
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{__html: text}}></div>
  </div>
)

export default TextCard
