import React, { createContext, useContext, useState, useEffect } from 'react';
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/youtube.png";
import projImg3 from "../assets/img/spotify.png";
import projImg4 from "../assets/img/instagram.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const userContext = createContext(null);

//      data pass to all components
export const useUserContext = () => {
    const { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify } = useContext(userContext);

    return { activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify };
};


export default function UserContextProvider({ children }) {

    //  Navbar functions
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
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
    const toRotate = ["MERN stack Developer", "Web Designer", "UI/UX Designer"];
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
    }, [text])

    //        useEffect(() => {
    //     const tick = () => {
    //         let i = loopNum % toRotate.length;
    //         let fullText = toRotate[i];
    //         let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //         setText(updatedText);

    //         if (isDeleting) {
    //             setDelta(prevDelta => prevDelta / 2);
    //         }

    //         if (!isDeleting && updatedText === fullText) {
    //             setIsDeleting(true);
    //             setIndex(prevIndex => prevIndex - 1);
    //             setDelta(period);
    //         } else if (isDeleting && updatedText === '') {
    //             setIsDeleting(false);
    //             setLoopNum(loopNum + 1);
    //             setIndex(1);
    //             setDelta(500);
    //         } else {
    //             setIndex(prevIndex => prevIndex + 1);
    //         }
    //     }
    //     let ticker = setInterval(() => {
    //         tick();
    //     }, delta);
    //     return () => { clearInterval(ticker) };
    //     // }, [text])
    // }, [text, delta, isDeleting, loopNum, toRotate])

    
    //Skills page functions
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    //project page functions
    const projects = [
        { title: "E-Commerce", link: "https://ecommerce-47401.web.app/", imgUrl: projImg1 },
        { title: "Youtube", link: "https://clone-90a52.web.app/", imgUrl: projImg2 },
        { title: "Spotify", link: "https://spotify-clone-7276b.web.app/", imgUrl: projImg3 },
        { title: "Instagram", link: "https://instagram-clone-fc9fd.web.app/", imgUrl: projImg4 }
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
        await axios.post('https://portfolio-backend-ysb8.onrender.com/contact', { formDetails })
            .then(res => {
                console.log(res.data.code);
                if (res.data.code === 200) {
                    setStatus({ succes: true, message: 'Message sent successfully' });
                } else {
                    setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
                }
            }).catch(err => console.log(err))
        setButtonText("Sent");
        setFormDetails(formInitialDetails);
        setTimeout(() => {
            setStatus({})
        }, 5000)
    }

    return (
        <userContext.Provider value={{ activeLink, setActiveLink, scrolled, setScrolled, onUpdateActiveLink, loopNum, setLoopNum, isDeleting, setIsDeleting, text, setText, delta, setDelta, index, setIndex, toRotate, period, responsive, projects, handleSubmit, formDetails, buttonText, status, onFormUpdate, notify }}>
            {children}
        </userContext.Provider>
    );
};

