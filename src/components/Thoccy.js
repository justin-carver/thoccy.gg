import _ from 'lodash';
import { motion } from 'framer-motion';
import XMLToReact from 'xml-to-react';
import { english60 } from '../conf/layouts.js'
import Key from './Key';

// ! Thoccy should not be generating <Key /> components from scratch.
const Thoccy = () => {

    // Create new "keyLength" prop to pass to CSS width properties for big keys. {Shift, Tab, Enter, Space}
    const xmlToReact = new XMLToReact({
        layout : (attrs) => ({ type: motion.div, props: {...attrs, className : "layout"}}),
        row: (attrs) => ({ type: motion.div, props: {...attrs, className : "row"}}),
        keyGroup: (attrs) => ({ type: motion.div, props: {...attrs, className : "key-group"}}),
        key : (attrs) => ({ type: Key, props : {...attrs, className : "Key"}})
    });

    const reactTree = xmlToReact.convert(english60);

    return (
        <motion.div className="Thoccy">
            { reactTree }
        </motion.div>
    );
}

export default Thoccy;