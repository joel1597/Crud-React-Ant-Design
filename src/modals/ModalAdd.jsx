import React, { useState } from 'react'
import { Button, Modal, Input, Form } from 'antd';

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    
    const [form] = Form.useForm();

    const validateNum = (e) => {
        const regex = /^[1-9]$/;
        const idUser = parseInt(e.target.value)

        if (!regex.test(idUser)) {
            console.log("error datos no permitidos")
            return
        }
    }

    const onFinish = () => {
        form
            .validateFields()
            .then((values) => {                                
                onCreate(JSON.stringify(values));
                //form.resetFields();
            })
            .catch((info) => {
                console.log('validate failed: '+ info)
            })
    }

    return (
        <Modal
            open={open}
            title="New Register"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={onFinish}
        >

            <Form
                name='createClient'
                form={form}                
            >
                <Form.Item key='idUser' name='idUser'>
                    <Input
                        placeholder='id user'
                        maxLength={1}
                        onChange={validateNum}
                    />
                </Form.Item>
                <Form.Item key='title' name='title'>
                    <Input
                        placeholder='title'
                    />
                </Form.Item>
                <Form.Item key='body' name='body'>
                    <Input
                        placeholder='body'
                    />
                </Form.Item>
            </Form>

        </Modal>
    )
}

export const ModalAdd = () => {

    const [modalOpen, SetModalOpen] = useState(false);

    const showModal = () => {
        SetModalOpen(true)
    }    

    const onCreate = (values) => {                
        const data = JSON.parse(values)
        console.log(data)        
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <CollectionCreateForm 
                open={modalOpen}
                onCreate={onCreate}
                onCancel={() => {
                    SetModalOpen(false)
                }}
            />          
        </>
    )
}
