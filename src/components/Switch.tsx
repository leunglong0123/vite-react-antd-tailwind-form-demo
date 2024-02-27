import React from 'react'
import { Switch, SwitchProps } from 'antd'

interface GenericSwitchProps extends SwitchProps {
  onChange: (value: boolean) => void
}

function GenericSwitch({ value, onChange, ...res }: GenericSwitchProps) {
  const handleChange = (checked: boolean) => {
    onChange(checked)
  }

  return (
    <Switch
      defaultChecked={false}
      style={{ outline: 40 }}
      checked={value}
      onChange={handleChange}
      className={value ? 'shadow-none' : 'shadow-md ring-2 ring-purple-light'}
      {...res}
    />
  )
}

export default GenericSwitch
