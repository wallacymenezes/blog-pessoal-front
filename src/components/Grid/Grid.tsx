//import React from 'react'
//rfce para criação rápida do componente

function Grid() {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-1 bg-red-600 h-screen">
            Servidores
        </div>

        <div className="col-span-3 bg-green-600">
            Canais
        </div>

        <div className="col-span-6 bg-orange-600">
            Feed
        </div>

        <div className="col-span-2 bg-blue-600">
            Usuarios
        </div>
    </div>
  )
}

export default Grid