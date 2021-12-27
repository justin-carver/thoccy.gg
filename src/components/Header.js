import { motion } from 'framer-motion';
import TypingArea from './TypingArea';

const Header = () => {
    
    const getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return `${mm}/${dd}/${yyyy}`;
    }

    return (
        <motion.div className="header-wrapper" animate={{
            opacity : 1
        }}
        initial={{
            opacity : 0
        }}>
        <div className="left-side">
            <header className="dark-mode">
                <motion.img src='img/keyboard.png' whileHover={{rotate : 360}}/>
                <span className="logo">thoccy.gg</span>
                <motion.span className="carat" animate={{ // ? Should this be a variant?
                    opacity : 1,
                }}
                initial = {{
                    opacity : 0,
                    delay : 0.3
                }}
                transition = {{
                    type : "spring",
                    stiffness : 100,
                    duration : 0.3,
                    yoyo : Infinity,
                }}></motion.span>
            </header>
            <p className="subtitle">Testing keyboards since {getCurrentDate()}!</p>
            <p className="subtitle intro">Use this website to test your keyboards button presses and switch functionality.</p>
        </div>
        <TypingArea />
    </motion.div>
    );
}

export default Header;