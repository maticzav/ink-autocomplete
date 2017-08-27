import {h} from 'ink'
import PropTypes from 'prop-types'

import Select from 'ink-select-input'
import TextInput from 'ink-text-input'

// Helpers -------------------------------------------------------------------

const noop = () => {}
const not = a => !a
const isEmpty = arr => arr.length === 0
const getMatch = input => ({label}) => input.length > 0 && label.toLowerCase().indexOf(input.toLowerCase()) > -1

// AutoComplete --------------------------------------------------------------

const AutoComplete = ({value, placeholder, items, getMatch, onChange, onSubmit, indicatorComponent, itemComponent}) => {
  const matches = items.filter(getMatch(value))
  const hasSuggestion = not(isEmpty(matches))

  return (
    <span>
      <div>
        <TextInput value={value} placeholder={placeholder} onChange={onChange}/>
      </div>
      { hasSuggestion && (
        <Select
          items={matches}
          onSelect={onSubmit}
          focus={hasSuggestion}
          indicatorComponent={indicatorComponent}
          itemComponent={itemComponent}
        />
      )}
    </span>
  )
}

AutoComplete.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
  getMatch: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  indicatorComponent: PropTypes.func,
  itemComponent: PropTypes.func
}

AutoComplete.defaultProps = {
  value: '',
  placeholder: '',
  items: [],
  getMatch,
  onChange: noop,
  onSubmit: noop,
  indicatorComponent: Select.defaultProps.indicatorComponent,
  itemComponent: Select.defaultProps.itemComponent
}

export default AutoComplete

// ---------------------------------------------------------------------------
