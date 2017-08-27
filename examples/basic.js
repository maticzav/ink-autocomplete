import {h, render, Component, Text} from 'ink'
import AutoComplete from '..'

// Demo
class Demo extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      selected: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render(props, {value, selected}) {
    const countries = [
      {
        label: 'United Kingdom',
        value: {country: 'United Kingdom', capital: 'London'}
      },
      {
        label: 'United States',
        value: {country: 'United States', capital: 'Washington DC'}
      },
      {
        label: 'United Arab Emirates',
        value: {country: 'United Arab Emirates', capital: 'Abu Dhabi'}
      }
    ]

    return (
      <div>
        <Text blue>{'Enter your country: '}</Text>
        <AutoComplete
          value={value}
          placeholder={'Type a country'}
          items={countries}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        { selected && (
          <span>
            <Text>The capital of your country is: </Text>
            <Text red>{selected.value.capital}</Text>
          </span>
        )}
      </div>
    )
  }

  handleChange(value) {
    this.setState({
      value,
      selected: null
    })
  }

  handleSubmit(selected) {
    this.setState({
      selected
    })
  }
}

// Ink
render(<Demo/>)
