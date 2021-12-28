import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypingArea = () => {

    const [taPlaceholder, setTextareaPlaceholder] = useState('');

    useEffect(() => {
        const arr = ['The quick brown fox jumped over the lazy dog.', 'Jackdaws love my big sphinx of quartz.', 'Sphinx of black quartz, judge my vow.'];
        setTextareaPlaceholder(arr[Math.floor(Math.random() * arr.length)]);
    }, []);

    return (
        // getPlaceholder getting called on every key press??
        <div className="typing-area">
            <motion.textarea type="text" placeholder={taPlaceholder} animate={{
                opacity : 1
            }}
            initial={{
                opacity : 0
            }}/>
            <span className="wpm">wpm: 108</span>
            <div className="options">
                <form>
                    <label>
                        Setting: <input type="checkbox" name=""/>
                    </label>
                    <label>
                        Setting: <input type="checkbox" name=""/>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default TypingArea;