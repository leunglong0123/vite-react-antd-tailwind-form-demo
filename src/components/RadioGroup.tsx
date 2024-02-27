import { Radio, Space, RadioProps } from 'antd'

interface CustomRadioProps extends RadioProps {
  options: {
    label: string
    value: string | number | boolean
    className?: string
  }[]
  direction?: 'horizontal' | 'vertical'
}

const RadioGroupComponent = ({
  options,
  onChange,
  direction = 'vertical',
  ...res
}: CustomRadioProps) => {
  return (
    <Radio.Group onChange={onChange} className="flex items-start" {...res}>
      <Space direction={direction} className="flex items-start">
        {options.map((option, index) => (
          <Radio
            key={option.value.toString() + '-' + index}
            value={option.value}
            className="font-normal"
          >
            {option.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  )
}

export default RadioGroupComponent
