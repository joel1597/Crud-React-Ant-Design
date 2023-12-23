{/**
  Pendientes:
  mantenimiento del api
  /////////////////////////////    
  Exportar a excel
*/}
import { Table, Spin, Button, Input, Empty, Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import { ModalAdd } from '../modals/ModalAdd';
import {  useJsonToCsv } from 'react-json-csv';
import React from 'react'

const { saveAsCsv } = useJsonToCsv();

export const Post = () => {

    const [data, setData] = useState({})
    const [showEmpty, setShowEmpty] = useState(false)
    const [pageSize, setPageSize] = useState({ pageSize: 10 })

    useEffect(() => {
        getPosts()
    }, []);

    const getPosts = async () => {
        let key = 0;
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const response = await data.json()
            const posts = response.map(item => {
                key++
                item.key = key
                return item
            });
            setData(posts)            
        } catch (error) {
            console.log("error: " + error)
        }

    }

    const searchTtitle = (event) => {
        let value = event.target.value;
        if (!value) {
            setShowEmpty(false)
            getPosts();
        } else {
            const search = data.filter(item => item.title.includes(value))
            if (search.length == 0) {
                setShowEmpty(true)
            }
            setData(search)
        }

    }

    const searchBody = (event) => {
        let value = event.target.value;
        if (!value) {
            getPosts();
        }
        const search = data.filter(item => item.body.includes(value))
        setData(search)
    }

    const onSave = () => {
        const newObject = {
            body: 'cuerpo del nuevo registro',
            id: 2,
            key: 9999,
            title: 'titulo del nuevo registro',
            userId: '3'
        }
        data.push(newObject)
    }

    const editAction = () => {
        console.log("hola soy edit")
        onSave()
    }

    const deleteAction = () => {
        console.log("hola soy delete")
    }

    const handleDropSelect = (e) => {
        setPageSize({ pageSize: e.key })
    }

    const handleDropSelectOrder = (e) => {        
        const keyInd = parseInt(e.key) == 1 ? true : false        
        const toConvert = [...data]

        if(keyInd){
            const orderAsc = toConvert.sort((a, b) => {return a.key - b.key})
            setData(orderAsc)
        }else{
            const orderDesc = toConvert.sort((a, b) => {return b.key - a.key})  
            setData(orderDesc)          
        }                  
    }

    const handleExportExcel = () => {
        const filename = "Mis ultimos Posts";
        const fields = {            
            "id": "Id",
            "title": "Title",
            //"body": "Body"
        };       

        const dataToExport = data.map(item => {
            return{
                id: item.id,
                title: item.title,
                //body: item.body
            }
        });

        saveAsCsv({ data:dataToExport, fields, filename })
    }

    const dropdownItems = [
        {
            label: '10',
            key: 10,
        },
        {
            label: '20',
            key: 20,
        },
        {
            label: '50',
            key: 50,
        },
        {
            label: '100',
            key: 100,
        }
    ]

    const dropdownOrderBy = [
        {
            label: 'A-Z',
            key: 1
        },
        {
            label: 'Z-A',
            key: 2
        }
    ]

    const columns = [
        {
            title: 'ID User',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Body',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title: 'Action',
            render: () => {
                return (
                    <div className='button-div'>
                        <Button onClick={editAction} type='primary' className='button-edit'>
                            Edit
                        </Button>
                        <Button onClick={deleteAction} type='primary' danger>
                            Delete
                        </Button>
                    </div>
                )
            }
        }
    ];

    return (
        <>
            <div className="">
                <div className="div-searcher">
                    <div className="searcher-input">
                        <Input
                            placeholder="Buscador titulo"
                            className='searcher__title'
                            onChange={searchTtitle}
                        />
                        <Input
                            placeholder="Buscador body"
                            className='searcher__body'
                            onChange={searchBody}
                        />
                    </div>
                    <div className="searcher-dropdown">
                        <Dropdown                            
                            menu={{
                                items: dropdownItems,
                                onClick: handleDropSelect
                            }}

                        >
                            <Button>Select page size</Button>
                        </Dropdown>

                        <Dropdown
                            menu={{
                                items: dropdownOrderBy,
                                onClick: handleDropSelectOrder
                            }}                            
                        >
                            <Button>Order By</Button>
                        </Dropdown>
                    </div>
                    

                    <div className="button-add">
                        <Button 
                            type="primary" 
                            className="button-excel"
                            onClick={handleExportExcel}
                        >
                            Excel
                        </Button>
                    </div>

                    <div className="button-add">
                        <ModalAdd />
                    </div>

                </div>
                {
                    showEmpty ? <Empty /> :

                        data && data.length ?
                            (<>
                                <Table
                                    bordered={true}
                                    columns={columns}
                                    dataSource={data}
                                    pagination={pageSize}
                                />
                            </>
                            ) : (
                                <div className='spin'>
                                    <Spin />
                                </div>
                            )

                }

            </div>
        </>
    )
}
