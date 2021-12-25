import { motion } from 'framer-motion'
import Key from './Key'

// ! Thoccy should not be generating <Key /> components from scratch.
const Thoccy = () => {

    const layout = [['ESC' , 27], 'blank', ['F1', 112], ['F2', 113], ['F3', 114], ['F4' , 115],
    'blank', ['F1', 112], ['F2', 113], ['F3', 114], ['F4' , 115],
    'blank', ['F1', 112], ['F2', 113], ['F3', 114], ['F4' , 115],
    'blank', ['F1', 112], ['F2', 113], ['F3', 114],
    'blank', 'blank', 'blank', 'blank', 'nl']; // This will be replaced by a layout config

    const createKeys = (layout) => {
        let keys = layout.map(e => {
            if (e === 'blank') {
                return <Key key={e} glyph={e[0]} query={true}/>;
            } else if (e === 'nl') {
                return <Key key={e} glyph={e[0]} query={'nl'}/>;
            } else {
                return <Key key={e} glyph={e[0]} query={false}/>;
            }
        });
        return keys;
    }

    return (
        <div className="Thoccy">
            { createKeys(layout) }
        </div>
    );
}

export default Thoccy;