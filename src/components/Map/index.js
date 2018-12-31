import React from 'react'
import './styles.css'

const Map = () => (
  <div className="Map-container">
    <svg className="Section-border" viewBox="0 0 8 4" preserveAspectRatio="none">
      <path d="M8 0v4H0a5.025 5.025 0 0 0 4-2 5.026 5.026 0 0 1 4-2z" />
    </svg>
    <iframe
      className="Map"
      title="Map around Theater de Veste"
      src="https://www.google.com/maps/embed/v1/place?q=Theater+de+Veste,Delft
      &zoom=17
      &key=AIzaSyD0jHEFwuRFjEevoPWQl871z89h_BzPT7I"
    />
  </div>
)

export default Map
