import React from 'react'


const Index = ({items}) => {
    return (
        <div>
        {items.map(item => (
            <div>
              <h2>{item.name}</h2>
              <img alt={'item'} src={item.src} style={{
            height: '35%',
            width: '35%'
          }}/>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
    )
}

export default Index
