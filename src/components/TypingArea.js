import { motion } from 'framer-motion'

const TypingArea = () => {

    const getPlaceholder = () => {
        let arr = ['The quick brown fox jumped over the lazy dog.', 'Jackdaws love my big sphinx of quartz.', 'Sphinx of black quartz, judge my vow.'];
        return arr[Math.floor(Math.random() * arr.length)];
    }

    return (
        <div className="typing-area">
            <motion.textarea type="text" placeholder={getPlaceholder()} animate={{
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