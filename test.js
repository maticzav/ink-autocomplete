import {h, renderToString} from 'ink'
import test from 'ava'

import Input from 'ink-text-input'

import AutoComplete from '.'

// Tests ---------------------------------------------------------------------

test('Renders correctly.', t => {
  t.is(renderToString(
    <AutoComplete/>
  ), renderToString((
    <span>
      <div>
        <Input value={''} placeholder={''}/>
      </div>
    </span>
	)))
})

// ---------------------------------------------------------------------------
