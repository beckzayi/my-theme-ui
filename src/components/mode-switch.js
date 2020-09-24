import React, { useContext } from 'react'
import { Radio, Label } from 'theme-ui'
import { GlobalDispatchContext } from '../context/GlobalContextProvider'
import { TOGGLE_MODE } from '../actions/types'

const ModeSwitch = () => {
  const dispatch = useContext(GlobalDispatchContext)

  return (
    <div>
      <Label>
        <Radio
          name='dark-mode'
          value='true'
          defaultChecked={true}
          onClick={() => dispatch({ type: TOGGLE_MODE })}
        />
        REST
      </Label>
      <Label>
        <Radio
          name='dark-mode'
          value='false'
          onClick={() => dispatch({ type: TOGGLE_MODE })}
        />
        GraphQL
      </Label>
    </div>
  )
}

export default ModeSwitch
