import { motion } from 'framer-motion';

// TODO: Verify what support is like for multiple languages / fonts.
const Key = (props) => {

    // ! May have to split the keys into various rows
    if (!props.query) {
        return (
            <div className="Key">
                <span className="key-glyph">{props.glyph}</span>
            </div>
        );
    } else if (props.query === 'nl') {
        return (
            <div className="new-line" />
        );
    } else {
        return (
            <div className="blank-key" />
        );
    }
}

export default Key;