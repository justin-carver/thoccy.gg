import { motion } from 'framer-motion'

const Thoccy = () => {
    
    const getCurrentDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        return `${mm}/${dd}/${yyyy}`;
    }

    return (
    <div className="thocc-wrapper">
        <div className="left-side">
            <header className="dark-mode">
                <motion.img src='img/keyboard.png' whileHover={{rotate : 360}}/>
                <span className="logo">thoccy.gg<motion.span animate={{
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
                }}>|</motion.span></span>
            </header>
            <p className="subtitle">Testing keyboards since {getCurrentDate()}!</p>
        </div>
        <div className="right-side">
            <input type="text" />
        </div>
    </div>
    );
}

export default Thoccy;