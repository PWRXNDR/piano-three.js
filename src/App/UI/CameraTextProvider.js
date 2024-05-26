export default class CameraTextProvider {
    constructor() {
        const styles = `
            <style>
                .letter {
                    position: relative;
                    display: inline-block;
                    background: linear-gradient(115deg, #ACACAC, #BFC1C2, #838996, #BFC1C2, #C0C0C0, #C9C0BB);
                    background-size: 400% 100%;
                    -webkit-background-clip: text;
                    color: transparent;
                    animation: text-animation 6s linear infinite;
                    opacity: 0.9;
                    transition: opacity 1s;
                }

                @keyframes text-animation {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 200% 50%;
                    }
                }

                /* Responsive styles */
                @media (max-width: 768px) {
                    .letter {
                        font-size: 2.5rem !important; /* Adjust font size for smaller screens */
                    }
                    .description-container {
                        bottom: 50% !important; /* Adjust position for smaller screens */
                        left: 50% !important;
                        transform: translate(-50%, -50%) !important;
                    }
                    .description-subcontainer {
                        top: 70% !important; /* Adjust position for smaller screens */
                        left: 50% !important;
                        transform: translate(-50%, -50%) !important;
                        font-size: 1.5rem !important; /* Adjust font size for smaller screens */
                    }
                }

                @media (max-width: 480px) {
                    .letter {
                        font-size: 2rem !important; /* Further adjust font size for very small screens */
                    }
                    .description-container {
                        bottom: 40% !important; /* Further adjust position for very small screens */
                    }
                    .description-subcontainer {
                        top: 80% !important; /* Further adjust position for very small screens */
                        font-size: 1rem !important; /* Further adjust font size for very small screens */
                    }
                }
            </style>
        `;

        this.cameraTexts = {
            0: {
                title: 'Annamaria Makay',
                description: `
                    ${styles}
                    <div style="
                        position: absolute; 
                        bottom: 60%; 
                        left: 30%; 
                        transform: translate(-50%, -50%); 
                        text-align: left; 
                        color: #d8bdbd; 
                        font-family: 'Arial', sans-serif; 
                        font-size: 4.2rem; 
                        background: transparent; 
                        opacity: 0.9; 
                        transition: opacity 1s; 
                        z-index: 10;">
                        <span class="letter" data-index="0" style="font-size: 4.2rem;">W</span>
                        <span class="letter" data-index="1" style="font-size: 4.2rem;">e</span>
                        <span class="letter" data-index="2" style="font-size: 4.2rem;">l</span>
                        <span class="letter" data-index="3" style="font-size: 4.2rem;">c</span>
                        <span class="letter" data-index="4" style="font-size: 4.2rem;">o</span>
                        <span class="letter" data-index="5" style="font-size: 4.2rem;">m</span>
                        <span class="letter" data-index="6" style="font-size: 4.2rem;">e</span>
                    </div>
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 32%;
                        transform: translate(-50%, -50%);
                        text-align: left;
                        color: #d8bdbd;
                        font-family: 'Arial', sans-serif;
                        font-size: 1.7rem;
                        background: transparent;
                        opacity: 0.9;
                        transition: opacity 1s;
                        z-index: 10;
                        width: 80%;
                        max-width: 500px;
                        word-wrap: break-word;">
                        <span class="letter" data-index="0" style="font-size: 2rem;">My name is</span>
                        <span class="letter" data-index="1" style="font-size: 2rem;">Annamaria</span>
                        <span class="letter" data-index="2" style="font-size: 2rem;">Makay,</span>
                        <span class="letter" data-index="3" style="font-size: 2rem;">Welcome</span>
                        <span class="letter" data-index="4" style="font-size: 2rem;">to</span>
                        <span class="letter" data-index="5" style="font-size: 2rem;">my</span>
                        <span class="letter" data-index="6" style="font-size: 2rem;">Portfolio</span>
                    </div>
                `
            },
            1: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 60%; 
                                left: 30%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">W</span>
                                <span class="letter" data-index="1">ho</span>
                                <span class="letter" data-index="2"> </span>
                                <span class="letter" data-index="3">am</span>
                                <span class="letter" data-index="4"> </span>
                                <span class="letter" data-index="5">I</span>
                                <span class="letter" data-index="6">?</span>
                            </div>
                            <div style="
                        position: absolute;
                        top: 55%;
                        left: 72%;
                        transform: translate(-50%, -50%);
                        text-align: left;
                        color: #d8bdbd;
                        font-family: 'Arial', sans-serif;
                        font-size: 1.7rem;
                        background: transparent;
                        opacity: 0.9;
                        transition: opacity 1s;
                        z-index: 10;
                        width: 80%;
                        max-width: 500px;
                        word-wrap: break-word;">
                        <span class="letter" data-index="0" style="font-size: 2rem;">I am a passionate pianist and graphic designer</span>
                        <span class="letter" data-index="1" style="font-size: 2rem;">with a lifetime experience.</span>
                        <span class="letter" data-index="2" style="font-size: 2rem;">I have pererormed on more than 1000000 large concerts over the world.</span>
                        <span class="letter" data-index="3" style="font-size: 2rem;">I know everything about perfumes.</span>
                        <span class="letter" data-index="4" style="font-size: 2rem;">I am very dedicated to perfection.</span>
                        <span class="letter" data-index="5" style="font-size: 2rem;">I am growing my influence as a talanted graphic designer.</span>
                        <span class="letter" data-index="6" style="font-size: 2rem;">I have finished my University with the average grade: 5.0.</span>
                    </div>
                        </span>
                    </a>
                `
            },
            2: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 50%; 
                                left: 70%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">My</span>
                                <span class="letter" data-index="1"> </span>
                                <span class="letter" data-index="2">legacy</span>
                                <span class="letter" data-index="3"></span>
                                <span class="letter" data-index="4"></span>
                                <span class="letter" data-index="5"></span>
                                <span class="letter" data-index="6"></span>
                            </div>
                            <div style="
                        position: absolute;
                        top: 65%;
                        left: 32%;
                        transform: translate(-50%, -50%);
                        text-align: left;
                        color: #d8bdbd;
                        font-family: 'Arial', sans-serif;
                        font-size: 1.7rem;
                        background: transparent;
                        opacity: 0.9;
                        transition: opacity 1s;
                        z-index: 10;
                        width: 80%;
                        max-width: 500px;
                        word-wrap: break-word;">
                        <span class="letter" data-index="0" style="font-size: 2rem;">I was playing piano since I was a smol baby.</span>
                        <span class="letter" data-index="1" style="font-size: 2rem;">Piano is my life.</span>
                        <span class="letter" data-index="2" style="font-size: 2rem;">I was even honored to be called </span>
                        <span class="letter" data-index="3" style="font-size: 2rem;">"Piannamaria" due to my unlimited passion for music.</span>
                        <span class="letter" data-index="4" style="font-size: 2rem;">I am also a part of a growing band </span>
                        <span class="letter" data-index="5" style="font-size: 2rem;">"the Platform Nine".</span>
                        <span class="letter" data-index="6" style="font-size: 2rem;">You can find me on my social media channels on the left top corner of the page.</span>
                    </div>
                        </span>
                    </a>
                `
            },
            3: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 60%; 
                                left: 30%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">Sausage</span>
                                <span class="letter" data-index="1"> </span>
                                <span class="letter" data-index="2">Dogs</span>
                                <span class="letter" data-index="3"></span>
                                <span class="letter" data-index="4"></span>
                                <span class="letter" data-index="5"></span>
                                <span class="letter" data-index="6"></span>
                            </div>
                            <div style="
                                position: absolute;
                                top: 70%;
                                left: 60%;
                                transform: translate(-50%, -50%);
                                text-align: left;
                                color: #C9C0BB;
                                font-family: 'Arial', sans-serif;
                                font-size: 2rem;
                                background: transparent;
                                opacity: 0.9;
                                transition: opacity 1s;
                                z-index: 10;
                                width: 80%;
                                max-width: 500px;
                                word-wrap: break-word;">
                                <span class="letter" data-index="0">I</span>
                                <span class="letter" data-index="1">Just</span>
                                <span class="letter" data-index="2">L</span>
                                <span class="letter" data-index="3">O</span>
                                <span class="letter" data-index="4">V</span>
                                <span class="letter" data-index="5">E</span>
                                <span class="letter" data-index="6">them</span>
                            </div>
                        </span>
                    </a>
                `
            },
            4: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 60%; 
                                left: 60%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">Business</span>
                                <span class="letter" data-index="1"></span>
                                <span class="letter" data-index="2">Natured</span>
                                <span class="letter" data-index="3"></span>
                                <span class="letter" data-index="4"></span>
                                <span class="letter" data-index="5"></span>
                                <span class="letter" data-index="6"></span>
                            </div>
                            <div style="
                                position: absolute;
                                top: 63%;
                                left: 65%;
                                transform: translate(-50%, -50%);
                                text-align: left;
                                color: #C9C0BB;
                                font-family: 'Arial', sans-serif;
                                font-size: 2rem;
                                background: transparent;
                                opacity: 0.9;
                                transition: opacity 1s;
                                z-index: 10;
                                width: 80%;
                                max-width: 500px;
                                word-wrap: break-word;">
                                <span class="letter" data-index="0">One day</span>
                                <span class="letter" data-index="1">I will establish</span>
                                <span class="letter" data-index="2">my own business</span>
                                <span class="letter" data-index="3">and I will be selling</span>
                                <span class="letter" data-index="4">Spongebob arms</span>
                                <span class="letter" data-index="5">as a delicious treat</span>
                                <span class="letter" data-index="6">for everyone.</span>
                            </div>
                        </span>
                    </a>
                `
            },
            5: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 70%; 
                                left: 50%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">Independent</span>
                                <span class="letter" data-index="1"></span>
                                <span class="letter" data-index="2"></span>
                                <span class="letter" data-index="3"></span>
                                <span class="letter" data-index="4"></span>
                                <span class="letter" data-index="5"></span>
                                <span class="letter" data-index="6"></span>
                            </div>
                            <div style="
                                position: absolute;
                                top: 80%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                text-align: left;
                                color: #C9C0BB;
                                font-family: 'Arial', sans-serif;
                                font-size: 2rem;
                                background: transparent;
                                opacity: 0.9;
                                transition: opacity 1s;
                                z-index: 10;
                                width: 80%;
                                max-width: 500px;
                                word-wrap: break-word;">
                                <span class="letter" data-index="0">I am a very</span>
                                <span class="letter" data-index="1">Independent</span>
                                <span class="letter" data-index="2">person</span>
                                <span class="letter" data-index="3">and it's</span>
                                <span class="letter" data-index="4">a very well</span>
                                <span class="letter" data-index="5">known</span>
                                <span class="letter" data-index="6">fact</span>
                            </div>
                        </span>
                    </a>
                `
            },
            6: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 60%; 
                                left: 15%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">Perfumes</span>
                                <span class="letter" data-index="1"></span>
                                <span class="letter" data-index="2"></span>
                                <span class="letter" data-index="3"></span>
                                <span class="letter" data-index="4"></span>
                                <span class="letter" data-index="5"></span>
                                <span class="letter" data-index="6"></span>
                            </div>
                            <div style="
                                position: absolute;
                                top: 60%;
                                left: 80%;
                                transform: translate(-50%, -50%);
                                text-align: left;
                                color: #C9C0BB;
                                font-family: 'Arial', sans-serif;
                                font-size: 2rem;
                                background: transparent;
                                opacity: 0.9;
                                transition: opacity 1s;
                                z-index: 10;
                                width: 80%;
                                max-width: 500px;
                                word-wrap: break-word;">
                                <span class="letter" data-index="0">I am</span>
                                <span class="letter" data-index="1">an</span>
                                <span class="letter" data-index="2">expert.</span>
                                <span class="letter" data-index="3">If you ever</span>
                                <span class="letter" data-index="4">feel like</span>
                                <span class="letter" data-index="5">you know everything about perfumes.</span>
                                <span class="letter" data-index="6">Just know that I exist.</span>
                            </div>
                        </span>
                    </a>
                `
            },
            7: {
                title: 'Annamaria Makay',
                description: `
                    <a class="codepen-button">
                        <span>
                            <div style="
                                position: absolute; 
                                bottom: 60%; 
                                left: 30%; 
                                transform: translate(-50%, -50%); 
                                text-align: left; 
                                color: #ACACAC;
                                font-family: 'Arial', sans-serif; 
                                font-size: 4.2rem; 
                                background: transparent; 
                                opacity: 0.9; 
                                transition: opacity 1s; 
                                z-index: 10;">
                                <span class="letter" data-index="0">Thank</span>
                                <span class="letter" data-index="1"></span>
                                <span class="letter" data-index="2"></span>
                                <span class="letter" data-index="3"> </span>
                                <span class="letter" data-index="4">Y</span>
                                <span class="letter" data-index="5">o</span>
                                <span class="letter" data-index="6">u</span>
                            </div>
                            <div style="
                                position: absolute;
                                top: 60%;
                                left: 35%;
                                transform: translate(-50%, -50%);
                                text-align: left;
                                color: #C9C0BB;
                                font-family: 'Arial', sans-serif;
                                font-size: 2rem;
                                background: transparent;
                                opacity: 0.9;
                                transition: opacity 1s;
                                z-index: 10;
                                width: 80%;
                                max-width: 500px;
                                word-wrap: break-word;">
                                <span class="letter" data-index="0">If you are</span>
                                <span class="letter" data-index="1">interested in collaboration</span>
                                <span class="letter" data-index="2">you can find</span>
                                <span class="letter" data-index="3">my contacts</span>
                                <span class="letter" data-index="4">in the left top corner</span>
                                <span class="letter" data-index="5">of the page.</span>
                                <span class="letter" data-index="6"></span>
                            </div>
                        </span>
                    </a>
                `
            }
        }
    }

    getTextForPosition(positionIndex) {
        return this.cameraTexts[positionIndex];
    }
}