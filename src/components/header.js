import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <header>
    <Link to="/">
      <img src="/images/logo.svg" title="enableHR" alt="enableHR" />
    </Link>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/docs">Docs</Link>
      </li>
    </ul>
  </header>
)
