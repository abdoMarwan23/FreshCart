import { ping } from 'ldrs'



export default function LoadingScrean() {
    ping.register()
    return (
        <>
            <div className='min-h-96 flex justify-center items-center'>
                <l-ping  size="55" speed="2" color="black" ></l-ping>
            </div>
        </>
    )
}
