import { Button, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const _SubmitForm = ({
  form: { getFieldDecorator, validateFields },
  onSubmit
}) => {
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
      <Form.Item label='Upload' />
      <Form.Item label='Calon A'>
        {getFieldDecorator('candidateA', {
          rules: [
            {
              message: 'Masukkan total perolehan suara Calon A',
              required: true
            }
          ]
        })(<Input placeholder='Total suara Calon A' type='number' />)}
      </Form.Item>
      <Form.Item label='Calon B'>
        {getFieldDecorator('candidateB', {
          rules: [
            {
              message: 'Masukkan total perolehan suara Calon B',
              required: true
            }
          ]
        })(<Input placeholder='Total suara Calon B' type='number' />)}
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          Kirim
        </Button>
      </Form.Item>
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
