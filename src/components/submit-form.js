import { Form, Input } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const _SubmitForm = ({ form: { getFieldDecorator } }) => (
  <Form colon={false} layout='vertical'>
    <Form.Item label='Upload' />
    <Form.Item label='Calon A'>
      {getFieldDecorator('candidateA', {
        rules: [
          { message: 'Masukkan total perolehan suara Calon A', required: true }
        ]
      })(<Input placeholder='Total suara Calon A' type='number' />)}
    </Form.Item>
    <Form.Item label='Calon B'>
      {getFieldDecorator('candidateB', {
        rules: [
          { message: 'Masukkan total perolehan suara Calon B', required: true }
        ]
      })(<Input placeholder='Total suara Calon B' type='number' />)}
    </Form.Item>
  </Form>
)

_SubmitForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired
  }).isRequired
}

const SubmitForm = Form.create()(_SubmitForm)

export default SubmitForm
