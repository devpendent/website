import { Button, Col, Form, Input, Row } from 'antd'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const FormContext = createContext({})

const NumberField = ({ id, label, message, placeholder }) => {
  const { getFieldDecorator } = useContext(FormContext)
  return (
    <Col sm={12} xs={24}>
      <Form.Item label={label}>
        {getFieldDecorator(id, {
          rules: [
            {
              message,
              required: true
            }
          ]
        })(<Input placeholder={placeholder} type='number' />)}
      </Form.Item>
    </Col>
  )
}

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

const _SubmitForm = ({
  form: { getFieldDecorator, validateFields },
  onSubmit
}) => {
  const contextValue = { getFieldDecorator }

  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, { candidateA, candidateB }) => {
      if (!err) {
        onSubmit({
          candidateA: Number(candidateA),
          candidateB: Number(candidateB)
        })
      }
    })
  }

  return (
    <Form colon={false} layout='vertical' onSubmit={handleSubmit}>
      <FormContext.Provider value={contextValue}>
        {/* TODO: <Form.Item label='Upload' /> */}
        <Row gutter={16}>
          <NumberField
            id='candidateA'
            label='Calon A'
            message='Masukkan total perolehan suara Calon A'
            placeholder='Total suara Calon A'
          />
          <NumberField
            id='candidateB'
            label='Calon B'
            message='Masukkan total perolehan suara Calon B'
            placeholder='Total suara Calon B'
          />
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item>
              <Button htmlType='submit' type='primary'>
                Kirim
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </FormContext.Provider>
    </Form>
  )
}

_SubmitForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
}

const SubmitForm = Form.create()(_SubmitForm)

export default SubmitForm
