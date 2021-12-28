import { motion } from 'framer-motion';
import { useState } from 'react';
import { english100 } from '../conf/layouts.js'
import XMLToReact from 'xml-to-react';
import Key from './Key';

// ! Thoccy should not be generating <Key /> components from scratch.
const Thoccy = () => {

    const [firedEvent, setFiredEvent] = useState('');

    const xmlToReact = new XMLToReact({
        layout : (attrs) => ({ type: motion.div, props: {...attrs, className : "layout"}}),
        row: (attrs) => ({ type: motion.div, props: {...attrs, className : "Thoccy__row"}}),
        keyGroup: (attrs) => ({ type: motion.div, props: {...attrs, className : "Thoccy__key-group"}}),
        key : (attrs) => ({ type: Key, props : {...attrs, className : `Thoccy__Key`, firedEvent}})
    });

    const reactTree = xmlToReact.convert(english100);

    document.addEventListener('keydown', function(event){
        setFiredEvent(event);
        [...document.querySelectorAll(`#${event.code}`)].map(key => {
            key.classList.remove('Thoccy__Key--pressed');
            key.classList.remove('Thoccy__Key--blank');
            key.classList.add('Thoccy__Key--held');
        });
    });

    document.addEventListener('keyup', function(event){
        [...document.querySelectorAll(`#${event.code}`)].map(key => {
            key.classList.remove('Thoccy__Key--held');
            key.classList.add('Thoccy__Key--pressed');
        });
    });

    return (
        <motion.div className="Thoccy">
            { reactTree }
        </motion.div>
    );
}

export default Thoccy;