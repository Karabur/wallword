import * as React from 'react'
const block = require('bem-cn')
import './app.less'

const b = block('app')

interface Props extends React.CommonProps {
}

interface State {
}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={b.mix(this.props.className)}>
        Hello!
      </div>
    )
  }
}