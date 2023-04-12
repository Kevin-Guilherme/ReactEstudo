import {UseState} from 'react'


export default function novaRota(props) {
    const { teste } = props
    const { alo } = props
    return(
        <>
        <header className='rotaNova'>
            <div>
                <h1>
                    {teste}
                </h1>
            </div>
        </header>
        </>
    )
}