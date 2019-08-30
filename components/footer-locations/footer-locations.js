import React, { Component } from 'react'
import Link from 'next/link'
import { ButtonClean } from '../'

class FooterLocations extends Component {
  constructor(props) {
    super(props)
    this.setSelectedOffice = this.setSelectedOffice.bind(this)
    this.state = {
      offices: ['ams', 'rtm', 'ehv'],
      selectedOffice: null,
    }
  }

  componentDidMount() {
    const { offices } = this.state
    this.setState({ selectedOffice: offices[0] })
  }

  setSelectedOffice(office) {
    this.setState({ selectedOffice: office })
  }

  render() {
    const { offices, selectedOffice } = this.state

    return (
      <div className="footer-locations">
        <ul className="no-style footer-locations-list">
          { offices.map((office, index) => (
            <li key={index}>
              { index !== 0 && (
                <span className="footer-locations-list__spacer">/</span>
              )}
              <ButtonClean
                classes={office === selectedOffice ? 'is-active' : ''}
                onClick={() => this.setSelectedOffice(office)}>
                {office}
              </ButtonClean>
            </li>
          ))}
        </ul>

        <div className="footer-locations-info">
          { selectedOffice === 'ams' && (
            <Link prefetch={false} href="https://goo.gl/maps/pzQL8yUbENJCEKhN7">
              <a target="_blank" rel="noopener noreferrer">
                020 204 45 77<br />
                Rijnsburgstraat 9<br />
                1059 AT Amsterdam<br />
                The Netherlands
              </a>
            </Link>
          )}

          { selectedOffice === 'rtm' && (
            <Link prefetch={false} href="https://goo.gl/maps/ixuv7UgYbo63eFcz5">
              <a target="_blank" rel="noopener noreferrer">
                010 30 703 10<br />
                Schiedamsedijk 40a<br />
                3011 ED Rotterdam<br />
                The Netherlands
              </a>
            </Link>
          )}

          { selectedOffice === 'ehv' && (
            <Link prefetch={false} href="https://goo.gl/maps/pEFY8ftV9NCWEwJ28">
              <a target="_blank" rel="noopener noreferrer">
                040 30 467 92<br />
                Kastanjelaan 400 (Microlab)<br />
                5616 LZ Eindhoven<br />
                The Netherlands
              </a>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default FooterLocations
