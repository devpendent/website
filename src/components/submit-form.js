import { Button, Col, Form, Input, Row } from 'antd'
import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const FormContext = createContext({})

const NumberField = ({ id, label, placeholder, requiredMessage }) => {
  const { getFieldDecorator } = useContext(FormContext)
  return (
    <Col sm={12} xs={24}>
      <Form.Item label={label}>
        {getFieldDecorator(id, {
          rules: [
            {
              message: requiredMessage,
              required: true
            },
            {
              max: 3,
              message: 'Total suara tidak boleh melebihi 3 digit angka'
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
  placeholder: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string.isRequired
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
            placeholder='Total suara Calon A'
            requiredMessage='Masukkan total perolehan suara Calon A'
          />
          <NumberField
            id='candidateB'
            label='Calon B'
            placeholder='Total suara Calon B'
            requiredMessage='Masukkan total perolehan suara Calon B'
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
