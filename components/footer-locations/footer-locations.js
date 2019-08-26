import React, { Component } from 'react'

class FooterLocations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'ams',
    }
  }

  render() {
    const { location } = this.state
    return (
      <div className="footer-locations">
        <ul className="no-style footer-locations-list">
          <li>
            <button
              onClick={() => this.setState({ location: 'ams' })}
              className={location === 'ams' ? 'is-active' : ''}>
              AMS
            </button>
          </li>

          <li>
            <button
              onClick={() => this.setState({ location: 'rtm' })}
              className={location === 'rtm' ? 'is-active' : ''}>
              RTM
            </button>
          </li>

          <li>
            <button
              onClick={() => this.setState({ location: 'ehv' })}
              className={location === 'ehv' ? 'is-active' : ''}>
              EHV
            </button>
          </li>
        </ul>

        <div className="footer-locations-info">
          <div className={location === 'ams' ? 'is-active' : ''}>
            <a href="https://www.google.nl/maps/place/Rijnsburgstraat+9,+1059+AT+Amsterdam/@52.3475182,4.8482701,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e21d502d2d59:0x908032e046a111ed!8m2!3d52.3475182!4d4.8504641"
              target="_blank"
              rel="noopener noreferrer">
              020 204 45 77 <br />
              Rijnsburgstraat 9 <br />
              1059 AT Amsterdam <br />
              The Netherlands
            </a>
          </div>

          <div className={location === 'rtm' ? 'is-active' : ''}>
            <a href="https://www.google.nl/maps/place/Schiedamsedijk+40,+3011+ED+Rotterdam/@51.9164886,4.4793697,17z/data=!3m1!4b1!4m5!3m4!1s0x47c4335e409d88e7:0xd4933742911020ec!8m2!3d51.9164886!4d4.4815637"
              target="_blank"
              rel="noopener noreferrer">
              010 30 703 10 <br />
              Schiedamsedijk 40a <br />
              3011 ED Rotterdam <br />
              The Netherlands
            </a>
          </div>

          <div className={location === 'ehv' ? 'is-active' : ''}>
            <a href="https://www.google.com/maps/place/Microlab/@51.444415,5.4577363,17z/data=!3m1!4b1!4m5!3m4!1s0x47c6d9134ac41f57:0x21be6060758879d9!8m2!3d51.444415!4d5.459925"
              target="_blank"
              rel="noopener noreferrer">
              040 30 467 92
              <br />
              Kastanjelaan 400 (Microlab) <br />
              5616 LZ Eindhoven <br />
              The Netherlands
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterLocations
