import { motion } from 'framer-motion';

// TODO: Verify what support is like for multiple languages / fonts.
const Key = (props) => {

    // ? Key should only take in really 3 different values as an obj:
    // ? { glyph, keyCode, state = held / pressed / unpressed }

    // Spawn stagger is currently not working...
    const spawnVariant = {
        animate : {
            opacity : 1,
        },
        initial : {
            opacity : 0,
            borderColor : '#FEFEFE'
        },
        hover : {
            borderColor: '#FF00FF',
            transition : {
                duration : 0.2,
            }
        }
    };

    return (
        <motion.div className={`Key blank ${props.size}`} id={props.keyCode} tabIndex="0" initial="initial" animate="animate" variants={spawnVariant} whileHover="hover">
            <span className="key-glyph">{props.glyph}</span>
            {props.secondGlyph !== null ? <span className="key-glyph-sec">{props.secondGlyph}</span> : null}
        </motion.div>
    );
}

export default Key;