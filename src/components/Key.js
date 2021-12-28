import { motion } from 'framer-motion';

const Key = (props) => {

    // Spawn stagger is currently not working...
    const spawnVariant = {
        animate : {
            opacity : 1,
        },
        initial : {
            opacity : 0,
            borderColor : '#FEFEFE',
        },
        hover : {
            backgroundColor : 'rgba(200, 200, 200, 0.5)',
            transition : {
                duration : 0.1
            }
        }
    };

    return (
        <motion.div className={`Thoccy__Key Thoccy__Key--blank Thoccy__Key--${props.size}`} id={props.keyCode} initial="initial" animate="animate" variants={spawnVariant} whileHover="hover">
            <span className="Thoccy__Key--key-glyph">{props.glyph}</span>
            {props.secondGlyph !== null ? <span className="Thoccy__Key--key-glyph-sec">{props.secondGlyph}</span> : null}
        </motion.div>
    );
}

export default Key;