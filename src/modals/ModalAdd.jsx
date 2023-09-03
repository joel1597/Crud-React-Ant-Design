import React, { useState } from 'react'
import { Button, Modal } from 'antd';

export const ModalAdd = () => {

    const [modalOpen, SetModalOpen] = useState(false);

    const showModal = () => {
        SetModalOpen(true)
    }

    const hideModal = () => {
        SetModalOpen(false)
    }

    const handleOk = () => {
        SetModalOpen(false)                        
    }

    return (
        <>        
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <Modal title="Basic Modal" open={modalOpen} onOk={handleOk} onCancel={hideModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
