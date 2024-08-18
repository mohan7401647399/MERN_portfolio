import React, { createContext, useContext, useState, useEffect } from 'react';
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/youtube.png";
import projImg3 from "../assets/img/spotify.png";
import projImg4 from "../assets/img/instagram.png";
import projImg5 from "../assets/img/Whatsapp.png";
import InventoryApp from "../assets/img/Inventory_app.png";
import DiceGame from "../assets/img/dice.jpg";
import BreakoutGame from "../assets/img/Breakout.jpg";
import FroggerGame from "../assets/img/Frogger.png";
import Netflix from "../assets/img/Netflix.png";
import Zoom from "../assets/img/Zoom.png";
import MernImg1 from "../assets/img/Login_signup.png";
import MernImg2 from "../assets/img/money_tracker.png";
import MernImg3 from "../assets/img/task_app.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/CSS.png'
import JS from '../assets/img/JS.png'
import BOOTSTRAP from '../assets/img/BOOTSTRAP.png'
import SQL from '../assets/img/SQL.png'
import MONGODB from '../assets/img/MONGODB.png'
import SASS from '../assets/img/SASS.png'
import TAILWIND from '../assets/img/TAILWINDCSS.png'
import REACT from '../assets/img/REACT.png'
import REACT_NATIVE from '../assets/img/REACT NATIVE.png'
import NEXT_JS from '../assets/img/NEXTJS.png'
import PYTHON from '../assets/img/PYTHON.png'
import NODEJS from '../assets/img/NODEJS.png'
import EXPRESS_JS from '../assets/img/EXPRESSJS.png'
import REDUX from '../assets/img/REDUX.png'
import POSTMAN from '../assets/img/POSTMAN.png'
import ANGULAR from '../assets/img/ANGULAR.png'
import FIREBASE from '../assets/img/FIREBASE.png'
import NETLIFY from '../assets/img/NETLIFY.png'

export const userContext = createContext(null);

//      data pass to all components
export const useUserContext = () => {
    const { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify, MERNprojects, JsGames, skillsLists } = useContext(userContext);

    return { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify, MERNprojects, JsGames, skillsLists };
};


export default function UserContextProvider({ children }) {

    //  Scroll functions
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0 || window.scrollY < 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    // banner page functions
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["FullStack Developer", "UI/UX Designer", "Front-end developer", "Backend developer", "Mobile App developer"];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])


    //Skills page functions
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    //MERN page functions
    const MERNprojects = [
        { title: "Inventory_App", link: "https://inventorybillingapp-mern.netlify.app", gitHub: "https://github.com/mohan7401647399/MERN-Inventory-app", imgUrl: InventoryApp },
        { title: "Netflix", link: "https://netflix-clone-mern-beta.vercel.app/", gitHub: "https://github.com/mohan7401647399/Netflix_clone_MERN", imgUrl: Netflix },
        { title: "Zoom-Clone", link: "https://zoom-clone-inky-rho.vercel.app/", gitHub: "https://github.com/mohan7401647399/zoom-clone", imgUrl: Zoom },
        { title: "Task_App", link: "https://mern-task-app-react.netlify.app/", gitHub: "https://github.com/mohan7401647399/MERN_task_app", imgUrl: MernImg3 },
        { title: "Login_Signup", link: "https://github.com/mohan7401647399/MERN/tree/main/Login_signup", gitHub: "https://github.com/mohan7401647399/MERN/tree/main/Login_signup", imgUrl: MernImg1 },
        { title: "Money_tracker", link: "https://github.com/mohan7401647399/MERN/tree/main/money_tracker", gitHub: "https://github.com/mohan7401647399/MERN/tree/main/money_tracker", imgUrl: MernImg2 }
    ];

    //project page functions
    const projects = [
        { title: "E-Commerce", link: "https://ecommerce-47401.web.app/", gitHub: "https://github.com/mohan7401647399/Ecommerce_react_redux", imgUrl: projImg1 },
        { title: "Whatsapp", link: "https://tiny-crepe-854021.netlify.app/", gitHub: "https://github.com/mohan7401647399/Whatsapp_Clone", imgUrl: projImg5 },
        { title: "Youtube", link: "https://clone-90a52.web.app/", gitHub: "https://github.com/mohan7401647399/React-Youtube-Clone", imgUrl: projImg2 },
        { title: "Spotify", link: "https://spotify-clone-7276b.web.app/", gitHub: "https://github.com/mohan7401647399/Spotify-Clone", imgUrl: projImg3 },
        { title: "Instagram", link: "https://instagram-react-clone.netlify.app/", gitHub: "https://github.com/mohan7401647399/React_Instagram_Clone", imgUrl: projImg4 }
    ];

    // JS Games
    const JsGames = [
        { title: "Dice_game", link: "https://papaya-kulfi-ae2a2c.netlify.app/", gitHub: "https://github.com/mohan7401647399/Dice-game---JS-DOM", imgUrl: DiceGame },
        { title: "Breakout_game", link: "https://relaxed-mooncake-cc1571.netlify.app/", gitHub: "https://github.com/mohan7401647399/Javascript_games/tree/main/Breakout", imgUrl: BreakoutGame },
        { title: "Frogger_game", link: "https://froggergamejs.netlify.app/", gitHub: "https://github.com/mohan7401647399/Javascript_games/tree/main/Frogger", imgUrl: FroggerGame },
    ];

    //contact page functions
    const formInitialDetails = { firstName: '', lastName: '', email: '', phone: '', message: '' }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const notify = () => toast("Contact form successfully saved!");

    const onFormUpdate = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        axios.defaults.withCredentials = true;
        await axios.post('https://portfolio-backend-ysb8.onrender.com/contact', { ...formDetails })
            .then(res => {
                console.log(res.data);
                if (res.data.code === 200) {
                    setStatus({ success: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                }
            }).catch(err => console.log(err))
        setButtonText("Sent");
        setFormDetails(formInitialDetails);
        setTimeout(() => {
            setStatus({})
        }, 2000)
    }


    //  Skills lists

    const skillsLists =
        [
            { src: HTML, now: 90, label: "HTML" },
            { src: CSS, now: 90, label: "CSS" },
            { src: JS, now: 90, label: "Javascript" },
            { src: BOOTSTRAP, now: 90, label: "Bootstrap" },
            { src: SQL, now: 90, label: "SQL" },
            { src: MONGODB, now: 90, label: "MongoDB" },
            { src: SASS, now: 90, label: "SASS" },
            { src: TAILWIND, now: 90, label: "Tailwind" },
            { src: REACT, now: 90, label: "React" },
            { src: REACT_NATIVE, now: 85, label: "React-Native" },
            { src: NEXT_JS, now: 90, label: "NextJs" },
            { src: PYTHON, now: 60, label: "Python" },
            { src: NODEJS, now: 90, label: "NodeJs" },
            { src: EXPRESS_JS, now: 80, label: "ExpressJs" },
            { src: REDUX, now: 90, label: "Redux" },
            { src: POSTMAN, now: 90, label: "Postman" },
            { src: ANGULAR, now: 60, label: "Angular" },
            { src: NETLIFY, now: 80, label: "Netlify" }, ,
            { src: FIREBASE, now: 90, label: "Firebase" },
        ]


    return (
        <userContext.Provider value={{ activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify, MERNprojects, JsGames, skillsLists }}>
            {children}
        </userContext.Provider>
    );
};

