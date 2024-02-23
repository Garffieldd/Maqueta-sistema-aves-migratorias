import ReactDOM from 'react-dom/client'
import './styles.css'
import { Canvas } from '@react-three/fiber'
import { World } from './World'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
    camera={ {
        fov: 45,
        near: 0.3,
        far: 1000,
        position: [-50, 20, 60],
        rotation: [0, 0, 0],
    } }
    >
        <World/>
    </Canvas>
)

