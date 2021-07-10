import { Form, Input, Modal, Select, Space } from 'antd';
import { Locations, SupportChannel } from '../../types';

type CreateModalProps = {
  visible: boolean;
  handleCancel: () => void;
};

export const CreateModal = ({ visible, handleCancel }: CreateModalProps) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    console.log('OK', form.getFieldsValue());
  };

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        handleCancel();
        form.resetFields();
      }}
      title="Novo Chamado"
      destroyOnClose
      maskClosable={false}
      onOk={handleOk}
    >
      <Form layout="vertical" name="create" form={form}>
        <Space direction="vertical">
          <Form.Item
            name="type"
            label="Tipo do chamado"
            initialValue={SupportChannel.HARDWARE}
          >
            <Select
              options={[
                { value: SupportChannel.HARDWARE, label: 'Hardware' },
                { value: SupportChannel.NETWORK, label: 'Rede' },
                {
                  value: SupportChannel.SOFTWARE,
                  label: 'Aplicação / Banco de dados'
                }
              ]}
            />
          </Form.Item>
          <Form.Item name="location" label="Local" initialValue={0}>
            <Select
              placeholder="Selecione"
              options={Locations.map((location, i) => ({
                value: i,
                label: location.cityName
              }))}
            />
          </Form.Item>
          <Form.Item name="phone" label="Telefone para contato">
            <Input />
          </Form.Item>
        </Space>
      </Form>
    </Modal>
  );
};
