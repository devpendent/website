import { Button, Col, Form, Input, Row } from "antd";
import PropTypes from "prop-types";
import React, { createContext, useCallback, useContext, useMemo } from "react";

const FormContext = createContext({});

const Col2 = props => <Col sm={12} xs={24} {...props} />;
const Col3 = props => <Col sm={8} xs={24} {...props} />;

const NumberField = ({
  id,
  label,
  placeholder,
  requiredMessage,
  validator,
  validatorMessage
}) => {
  const { getFieldDecorator, getFieldError } = useContext(FormContext);
  const getValidateStatus = errors => {
    if (!errors) {
      return "success";
    } else if (errors.length === 1 && errors[0] === validatorMessage) {
      return "warning";
    }
    return "error";
  };

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
            message: "Total suara tidak boleh melebihi 3 digit angka"
          },
          ...(validator && validatorMessage
            ? [{ validator, message: validatorMessage }]
            : [])
        ]
      })(<Input placeholder={placeholder} type="number" />)}
    </Form.Item>
  );
};

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  requiredMessage: PropTypes.string,
  validator: PropTypes.func,
  validatorMessage: PropTypes.string
};

const _SubmitForm = ({
  form: { getFieldDecorator, getFieldError, getFieldValue, validateFields },
  onSubmit
}) => {
  const contextValue = useMemo(
    () => ({
      getFieldDecorator,
      getFieldError
    }),
    [getFieldDecorator, getFieldError]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      validateFields(
        (err, { candidateA, candidateB, invalid, total, valid }) => {
          if (!err) {
            onSubmit({
              candidateA: Number(candidateA),
              candidateB: Number(candidateB),
              invalid: Number(invalid),
              total: Number(total),
              valid: Number(valid)
            });
          }
        }
      );
    },
    [validateFields]
  );

  const sum = useCallback(
    ids =>
      ids.reduce(
        (accumulator, id) => accumulator + Number(getFieldValue(id)),
        0
      ),
    [getFieldValue]
  );

  const validateSum = useCallback(
    ids =>
      useCallback(
        (rule, value, callback) => {
          let error;
          if (value && Number(value) !== sum(ids)) {
            error = `${rule.field} is mathematically incorrect`;
          }
          callback(error);
        },
        [getFieldValue]
      ),
    [getFieldValue]
  );

  return (
    <Form
      autoComplete="off"
      colon={false}
      layout="vertical"
      onSubmit={handleSubmit}
    >
      <FormContext.Provider value={contextValue}>
        {/* TODO: <Form.Item label='Upload' /> */}
        <Row gutter={16}>
          <Col2>
            <NumberField
              id="candidateA"
              label="Calon A"
              placeholder="Total suara Calon A"
              requiredMessage="Masukkan total perolehan suara Calon A"
            />
          </Col2>
          <Col2>
            <NumberField
              id="candidateB"
              label="Calon B"
              placeholder="Total suara Calon B"
              requiredMessage="Masukkan total perolehan suara Calon B"
            />
          </Col2>
        </Row>
        <Row gutter={16}>
          <Col3>
            <NumberField
              id="invalid"
              label="Tidak Sah"
              placeholder="Jumlah suara tidak sah"
              requiredMessage="Masukkan jumlah suara tidak sah"
            />
          </Col3>
          <Col3>
            <NumberField
              id="valid"
              label="Sah"
              placeholder="Jumlah seluruh suara sah"
              requiredMessage="Masukkan jumlah seluruh suara sah (A + B)"
              validator={validateSum(["candidateA", "candidateB"])}
              validatorMessage="Perhitungan suara sah salah"
            />
          </Col3>
          <Col3>
            <NumberField
              id="total"
              label="Sah + Tidak Sah"
              placeholder="Jumlah seluruh suara sah dan suara tidak sah"
              requiredMessage="Masukkan jumlah seluruh suara sah dan suara tidak sah"
              validator={validateSum(["invalid", "candidateA", "candidateB"])}
              validatorMessage="Perhitungan jumlah seluruh suara sah dan suara tidak sah salah"
            />
          </Col3>
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Kirim
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </FormContext.Provider>
    </Form>
  );
};

const SubmitForm = Form.create()(_SubmitForm);

export default SubmitForm;
