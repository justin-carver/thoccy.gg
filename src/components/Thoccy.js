import _ from 'lodash';
import { motion } from 'framer-motion';
import { useState } from 'react';
import XMLToReact from 'xml-to-react';
import { english100 } from '../conf/layouts.js'
import Key from './Key';

// ! Thoccy should not be generating <Key /> components from scratch.
const Thoccy = () => {

    const [firedEvent, setFiredEvent] = useState('');

    const xmlToReact = new XMLToReact({
        layout : (attrs) => ({ type: motion.div, props: {...attrs, className : "layout"}}),
        row: (attrs) => ({ type: motion.div, props: {...attrs, className : "row"}}),
        keyGroup: (attrs) => ({ type: motion.div, props: {...attrs, className : "key-group"}}),
        key : (attrs) => ({ type: Key, props : {...attrs, className : `Key`, firedEvent}})
    });

    const reactTree = xmlToReact.convert(english100);

    document.addEventListener('keydown', function(event){
        setFiredEvent(event);
        document.getElementById(event.code).classList.remove('pressed');
        document.getElementById(event.code).classList.remove('blank');
        document.getElementById(event.code).classList.add('held');
    });

    document.addEventListener('keyup', function(event){
        document.getElementById(event.code).classList.remove('held');
        document.getElementById(event.code).classList.add('pressed');
    });

    return (
        <motion.div className="Thoccy">
            { reactTree }
        </motion.div>
    );
}

export default Thoccy;