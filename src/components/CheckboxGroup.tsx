import React from 'react'
import { Checkbox, Space } from 'antd'
import type {
  CheckboxGroupProps,
  CheckboxOptionType
} from 'antd/lib/checkbox/Group'

interface CustomCheckboxOption extends CheckboxOptionType {
  label: string
  value: string
  defaultChecked?: boolean
  disabled?: boolean
  className?: string
}

interface CustomCheckboxProps extends CheckboxGroupProps {
  options: CustomCheckboxOption[]
  direction?: 'horizontal' | 'vertical'
  span?: number
}

const CheckboxGroupComponent: React.FC<CustomCheckboxProps> = ({
  options,
  onChange,
  direction = 'vertical',
  ...res
}) => {
  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange} {...res}>
      <Space direction={direction} className="flex items-start">
        {options.map((option, index) => (
          <Checkbox
            key={option.value + '-' + index}
            className={option.className || 'font-normal'}
            value={option.value}
          >
            {option.label}
          </Checkbox>
        ))}
      </Space>
    </Checkbox.Group>
  )
}

export default CheckboxGroupComponent
