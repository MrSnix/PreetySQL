import React from 'react';
import { Link } from 'react-router-dom';
import './MissingView.css';

export default function MissingView() {
    return (
        <div className="missing-view">
            <div className="missing-view__container">
                <img
                    alt="mr-fluffy cat"
                    className="missing-view__mr-fluffy"
                    src="/assets/error.jpg"
                />
                <p className="missing-view__text">Why...are you ...here?</p>
                <p className="missing-view__text">
                    <Link to={'/'}>
                        Go <b>back</b>
                    </Link>
                </p>
            </div>
        </div>
    );
}
