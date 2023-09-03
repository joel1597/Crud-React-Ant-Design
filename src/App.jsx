{/**

  Pendientes:
  mantenimiento del api  
  Paginacion: dinamica --- puede vizualizar 20 -30 o la cantidad que el usuario desee
  Ordernar alfabeticamente
  Exportar a excel

*/}
import { Table, Spin, Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { ModalAdd } from './modals/ModalAdd';
import './App.css'

function App(props) {  
  const [data, setData] = useState({})

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
    if( !value ){
      getPosts();
    }
    const search = data.filter(item => item.title.includes(value))    
    console.log(search)    
    setData(search)        
  }

  const searchBody = (event) => {
    let value = event.target.value;    
    if( !value ){
      getPosts();
    }
    const search = data.filter(item => item.body.includes(value))    
    console.log(search)    
    setData(search)
  }

  const editAction = () => {
    console.log("hola soy edit")
  }

  const deleteAction = () => {
    console.log("hola soy delete")
  }

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
        {
          data && data.length ?
            (<>
            <ModalAdd />
            <div className="div-searcher">
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
              <Table
                bordered={true}
                columns={columns}
                dataSource={data}
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

export default App
