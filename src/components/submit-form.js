import { Button, Col, Form, Input, Row } from 'antd'
import PropTypes from 'prop-types'
import React, { createContext, useCallback, useContext, useMemo } from 'react'

const FormContext = createContext({})

const NumberField = ({
  id,
  label,
  placeholder,
  requiredMessage,
  validator,
  validatorMessage
}) => {
  const { getFieldDecorator, getFieldError } = useContext(FormContext)
  const getValidateStatus = errors => {
    if (!errors) {
      return 'success'
    } else if (errors.length === 1 && errors[0] === validatorMessage) {
      return 'warning'
    } else if (errors.length > 0) {
      return 'error'
    }
  }

  return (
    <Form.Item
      label={label}
      validateStatus={getValidateStatus(getFieldError(id))}
    >
      {getFieldDecorator(id, {
        rules: [
          {
            message: requiredMessage,
            required: true
          },
          {
            max: 3,
            message: 'Total suara tidak boleh melebihi 3 digit angka'
          },
          ...(validator && validatorMessage
            ? [{ validator, message: validatorMessage }]
            : [])
        ]
      })(<Input placeholder={placeholder} type='number' />)}
    </Form.Item>
  )
}

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  validator: PropTypes.func,
  validatorMessage: PropTypes.string
}

const _SubmitForm = ({
  form: { getFieldDecorator, getFieldError, getFieldsValue, validateFields },
  onSubmit
}) => {
  const contextValue = useMemo(
    () => ({
      getFieldDecorator,
      getFieldError
    }),
    [getFieldDecorator, getFieldError]
  )

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      validateFields(
        (err, { candidateA, candidateB, invalid, total, valid }) => {
          if (!err) {
            onSubmit({
              candidateA: Number(candidateA),
              candidateB: Number(candidateB),
              invalid: Number(invalid),
              total: Number(total),
              valid: Number(valid)
            })
          }
        }
      )
    },
    [validateFields]
  )

  const validateSuaraSah = useCallback(
    (rule, value, callback) => {
      let error
      const { candidateA, candidateB } = getFieldsValue([
        'candidateA',
        'candidateB'
      ])
      if (value && Number(value) !== Number(candidateA) + Number(candidateB)) {
        error = `${rule.field} is mathematically incorrect`
      }
      callback(error)
    },
    [getFieldsValue]
  )

  const validateTotal = useCallback(
    (rule, value, callback) => {
      let error
      const { invalid, valid } = getFieldsValue(['invalid', 'valid'])
      if (value && Number(value) !== Number(invalid) + Number(valid)) {
        error = `${rule.field} is mathematically incorrect`
      }
      callback(error)
    },
    [getFieldsValue]
  )

  return (
    <Form
      autoComplete='off'
      colon={false}
      layout='vertical'
      onSubmit={handleSubmit}
    >
      <FormContext.Provider value={contextValue}>
        {/* TODO: <Form.Item label='Upload' /> */}
        <Row gutter={16}>
          <Col sm={12} xs={24}>
            <NumberField
              id='candidateA'
              label='Calon A'
              placeholder='Total suara Calon A'
              requiredMessage='Masukkan total perolehan suara Calon A'
            />
          </Col>
          <Col sm={12} xs={24}>
            <NumberField
              id='candidateB'
              label='Calon B'
              placeholder='Total suara Calon B'
              requiredMessage='Masukkan total perolehan suara Calon B'
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={8} xs={24}>
            <NumberField
              id='invalid'
              label='Tidak Sah'
              placeholder='Jumlah suara tidak sah'
              requiredMessage='Masukkan jumlah suara tidak sah'
            />
          </Col>
          <Col sm={8} xs={24}>
            <NumberField
              id='valid'
              label='Sah'
              placeholder='Jumlah seluruh suara sah'
              requiredMessage='Masukkan jumlah seluruh suara sah (A + B)'
              validator={validateSuaraSah}
              validatorMessage='Perhitungan suara sah salah'
            />
          </Col>
          <Col sm={8} xs={24}>
            <NumberField
              id='total'
              label='Sah + Tidak Sah'
              placeholder='Jumlah seluruh suara sah dan suara tidak sah'
              requiredMessage='Masukkan jumlah seluruh suara sah dan suara tidak sah'
              validator={validateTotal}
              validatorMessage='Perhitungan jumlah seluruh suara sah dan suara tidak sah salah'
            />
          </Col>
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
