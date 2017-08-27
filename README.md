# ink-autocomplete

> Autocomplete component for [Ink](https://github.com/vadimdemedes/ink).


## Install

```
$ npm install ink-autocomplete
```

## Usage

__Use arrows to navigate up and down and press enter to submit.__

```jsx
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
        <Text green>{'Enter your country: '}</Text>
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
```

<img src="media/demo.gif" width="508">


## Props

#### value `string`
> Value of the input.

#### placeholder `string`
> String displayed when the input is empty.

#### items `array<item>`
> A list of all items. Each item must include `label` and `value` property.

#### getMatch `string => item => bool`
> Called to determine which items satisfy the input.

#### onChange `function string => ()`
> Called each time input is changed.

#### onSubmit `function (item) => ()`
> Called once suggestion is selected.

#### indicatorComponent `Component`
> Custom component to override the default item component.

#### itemComponent `Component`
> Custom component to override the default item component.

## License

MIT © [Matic Zavadlal](http://github.com/maticzav)
