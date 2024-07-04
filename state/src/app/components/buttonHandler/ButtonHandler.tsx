"use client"
import { useState } from 'react';
import Button from '../button/Button';

const studentsArray = ["Masfa", "Ulfat", "Musab", "Nasrullah", "Ansari"];

function ButtonHandler() {
    const [currentIndex, setCurrentIndex] = useState(-1);

    const onClickNextHandler = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % studentsArray.length);
    };

    const onClickBackHandler = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + studentsArray.length) % studentsArray.length);
    };

    return (
        <main>
            <div>ButtonHandler</div>

            <br />
            <Button liner="Back" onClickHandler={onClickBackHandler} />
            {studentsArray[currentIndex]}
            <Button liner="Next" onClickHandler={onClickNextHandler} />
        </main>
    );
}

export default ButtonHandler;
