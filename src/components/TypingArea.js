import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TypingArea = () => {

    const [taPlaceholder, setTextareaPlaceholder] = useState('');

    useEffect(() => {
        // Choose random pangram.
        const arr = ['The quick brown fox jumped over the lazy dog.', 'Jackdaws love my big sphinx of quartz.', 
        'Sphinx of black quartz, judge my vow.', 'Jim quickly realized that the beautiful gowns are expensive.',
        'Back in June we delivered oxygen equipment of the same size.', 'The wizard quickly jinxed the gnomes before they vaporized.',
        'A quivering Texas zombie fought republic linked jewelry.', 'All questions asked by five watched experts amaze the judge.'];
        setTextareaPlaceholder(arr[Math.floor(Math.random() * arr.length)]);
    }, []);

    return (
        <div className="TypingArea">
            <motion.textarea type="text" placeholder={taPlaceholder} animate={{
                opacity : 1
            }}
            initial={{
                opacity : 0
            }}/>
            <span className="TypingArea__wpm">wpm: 108</span>
            <div className="TypingArea__options">
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