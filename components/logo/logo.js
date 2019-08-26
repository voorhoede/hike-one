import React from 'react'
import PropTypes from 'prop-types'

const Logo = ({ color = 'white' }) => (
  <svg className={`logo ${color}`} height="22" xmlns="http://www.w3.org/2000/svg" viewBox="50 50.01 685.14 129.44">
    <polygon fill="#FE595B" points="156.13,50.01 170.78,96.02 195.48,63.62 " />
    <path className="logo-body" fill="#171717" d="M111.68,63.55h26v113.63h-26v-45.13H76v45.12H50V63.55h26v43.5h35.71L111.68,63.55z" />
    <path className="logo-body" fill="#171717" d="M158.75,177.18v-71.1h24.35v71.1H158.75z" />
    <path className="logo-body" fill="#171717" d="M281.3,177.18h-27.59l-26-35.8v35.8h-24.32V96l24.35-32.44v68L252.09,96h28.41l-29.55,40.6L281.3,177.18z" />
    <path className="logo-body" fill="#171717" d="M309.55,146.34c2.807,7.573,9.29,11.36,19.45,11.36c6.6,0,11.793-2.057,15.58-6.171l19.48,11.201
    c-8,11.146-19.797,16.72-35.39,16.72c-13.633,0-24.537-4.057-32.71-12.171c-8.173-8.113-12.247-18.34-12.22-30.68
    c0-12.227,4.03-22.426,12.09-30.6c8.06-8.173,18.423-12.26,31.09-12.26c11.793,0,21.613,4.086,29.46,12.26
    c7.847,8.174,11.77,18.373,11.77,30.6c0.011,3.273-0.324,6.538-1,9.74H309.55z M309.06,128.16H344
    c-2.38-8.547-8.117-12.82-17.21-12.82C317.35,115.334,311.44,119.606,309.06,128.16z" />
    <path className="logo-body" fill="#171717" d="M524.291,162.41c-11.475,11.333-25.434,17-41.881,17s-30.406-5.667-41.879-17
    c-11.475-11.334-17.211-25.334-17.211-42c0-16.667,5.736-30.667,17.211-42c11.473-11.333,25.432-17,41.879-17
    s30.406,5.667,41.881,17c11.473,11.333,17.209,25.333,17.209,42C541.5,137.076,535.763,151.076,524.291,162.41z M458.791,144.721
    c6.332,6.279,14.207,9.416,23.619,9.409c9.414-0.007,17.277-3.146,23.59-9.42c6.334-6.273,9.498-14.39,9.49-24.351
    C515.484,110.4,512.32,102.28,506,96c-6.332-6.273-14.207-9.41-23.619-9.41c-9.414,0-17.277,3.137-23.59,9.41
    c-6.334,6.28-9.5,14.396-9.5,24.35s3.166,18.074,9.5,24.36V144.721z" />
    <path className="logo-body" fill="#171717" d="M605.291,93.74c8.172-0.216,16.055,3.026,21.709,8.93c5.787,5.954,8.68,14.177,8.68,24.67v49.83h-24.389
    v-46.25c0-4.76-1.334-8.427-4-11c-2.736-2.572-6.387-3.943-10.141-3.811c-4.666,0-8.334,1.407-11,4.221s-4.02,6.98-4.061,12.5
    v44.311H557.73V96h24.35v7.63C586.947,97.043,594.683,93.747,605.291,93.74z" />
    <path className="logo-body" fill="#171717" d="M676.541,146.34c2.812,7.573,9.299,11.36,19.459,11.36c6.6,0,11.793-2.057,15.58-6.171l19.48,11.201
    c-8,11.146-19.797,16.72-35.391,16.72c-13.633,0-24.537-4.057-32.709-12.171c-8.174-8.113-12.25-18.34-12.23-30.68
    c0-12.227,4.029-22.426,12.09-30.6c8.061-8.173,18.424-12.26,31.09-12.26c11.793,0,21.613,4.086,29.461,12.26
    c7.846,8.174,11.77,18.373,11.77,30.6c0.01,3.273-0.324,6.538-1,9.74H676.541z M676.05,128.16H711
    c-2.379-8.547-8.117-12.82-17.209-12.82c-9.441-0.006-15.35,4.267-17.73,12.82H676.05z" />
  </svg>
)

Logo.propTypes = {
  color: PropTypes.string,
}

export default Logo
