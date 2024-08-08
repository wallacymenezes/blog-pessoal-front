//import React from 'react'
// Para usar uma cor específica -[#000000]
function Flex(){
    return(
        <div className="border-4 border-red-600 m-8 p-8 flex items-center justify-between">
            <div className="w-[250px]">
                <h1 className="text-2xl">Scarlet Witch</h1>
                <p>Mais Poderosa que o Mago Supremo</p>
            </div>

            <div className="w-[250px]">
                <img src="https://i.pinimg.com/originals/42/83/a1/4283a1452ff76b182afad22f41f2970a.jpg" alt="Feiticeira Escarlate" />
            </div>
        </div>
    )
}

export default Flex