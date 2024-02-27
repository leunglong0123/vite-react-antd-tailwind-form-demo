import { useState, useCallback } from 'react'
import { Form, Button, Flex, Card, FormProps } from 'antd'
import GenericSwitch from './components/Switch'

import RadioGroupComponent from './components/RadioGroup'
import CheckboxGroupComponent from './components/CheckboxGroup'
import './App.css'

function App() {
  interface FormValuesProps {
    isProficient: boolean
    toolsUsed: string | Array<string>
  }

  const defaultValues = {
    isProficient: false,
    toolsUsed: '0,2,3,4'
  }

  const [componentDisabled, setComponentDisabled] = useState<boolean>(false)
  const RadioOptions = [
    { label: 'No', value: false },
    { label: 'Yes', value: true }
  ]

  const CheckBoxOptions = [
    { label: 'Redux', value: '0' },
    { label: 'Lodash', value: '1' },
    { label: 'Ant design', value: '2' },
    { label: 'Webpack', value: '3' },
    { label: 'Other', value: '4' }
  ]

  const onSubmit = useCallback((values: FormValuesProps) => {
    console.log({ ...values })
  }, [])

  return (
    <Card className="w-[409px] rounded-none shadow-none">
      <Form.Item label="Editable" style={{ fontSize: '16px' }}>
        <Flex align="end" vertical>
          <GenericSwitch
            onChange={e => setComponentDisabled(!e)}
            defaultChecked={!componentDisabled}
          />
        </Flex>
      </Form.Item>
      <Form
        disabled={componentDisabled}
        initialValues={defaultValues}
        onFinish={onSubmit}
        layout="vertical"
      >
        <Form.Item
          name="isProficient"
          label="Are you proficient in ReactJS development?"
          className="font-bold"
        >
          <RadioGroupComponent options={RadioOptions} />
        </Form.Item>
        <Form.Item
          label="Which tools do you use?"
          name="toolsUsed"
          className="font-bold"
        >
          <CheckboxGroupComponent options={CheckBoxOptions} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`bg-purple-dark w-[200px] h-auto py-4 rounded-full font-bold ${componentDisabled ?? 'bg-red-500'}`}
          >
            Process
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default App
