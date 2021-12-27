import { motion } from 'framer-motion';

// TODO: Verify what support is like for multiple languages / fonts.
const Key = (props) => {

    // ? Key should only take in really 3 different values as an obj:
    // ? { glyph, keyCode, state = held / pressed / unpressed }

    // Spawn stagger is currently not working...
    const spawnVariant = {
        animate : {
            opacity : 1
        },
        initial : {
            opacity : 0
        },
        transition : {
            type : "spring",
            staggerChildren : 0.3
        }
    };

    return (
        <motion.div className="Key" initial="initial" animate="animate" variants={spawnVariant}>
            <span className="key-glyph">{props.glyph}</span>
        </motion.div>
    );
}

export default Key;