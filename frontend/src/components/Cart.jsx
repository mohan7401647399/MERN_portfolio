import React, { useEffect, useState, useRef } from "react";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Cart({ src, now, label, index }) {
    const [isVisible, setIsVisible] = useState(false);
    const cartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, index * 200); // Staggered effect
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (cartRef.current) {
            observer.observe(cartRef.current);
        }

        return () => {
            if (cartRef.current) {
                observer.unobserve(cartRef.current);
            }
        };
    }, [index, isVisible]);

    return (
        <div
            ref={ cartRef }
            className={ `transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
                }` }
        >
            <div className="p-4 border-2 border-pink-600 rounded-lg shadow-lg bg-white transition-transform hover:scale-105">
                {/* Skill Image */ }
                <div className="w-24 h-24 mx-auto mb-3">
                    <Image
                        src={ src }
                        thumbnail
                        className="object-contain w-full h-full border-0 rounded-lg"
                        loading="lazy"
                        alt={ label }
                    />
                </div>

                {/* Progress Bar */ }
                <div className="w-48 mx-auto">
                    <ProgressBar now={ now } label={ `${now}%` } animated className="rounded-md" />
                </div>

                {/* Skill Label */ }
                <p className="text-center mt-2 font-semibold text-gray-700">{ label }</p>
            </div>
        </div>
    );
}
