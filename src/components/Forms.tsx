import React, { useCallback, useEffect, useRef, useState } from "react";
import emailJs from '@emailjs/browser';

import "@/styles/forms.style.css";

const Forms: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [progress, setProgress] = useState(100);

    const nameInputRef = useRef<HTMLInputElement>(null);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setName(value);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    }, []);

    const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setMessage(value);
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValidEmail(email)) {
            setLoading(true);
        } else {
            alert("Por favor, digite um email válido.");
        }
    }, [email]);

    const requestEmailJs = useCallback(async () => {
        const templateParams = {
            to_name: 'Vitor Nogueira',
            from_name: name,
            message: message,
            email: email,
        }
        await emailJs.send('service_a0q7po9', 'template_ep8mlg9', templateParams, 'cEeZF2PsyKVjEerkE')
    }, [email, message, name])

    useEffect(() => {
        if (isLoading) {
            requestEmailJs().then(() => {
                setName('');
                setEmail('');
                setMessage('');
                setLoading(false);
                setShowMessage(true);
            })
        }
    }, [isLoading, requestEmailJs])

    useEffect(() => {
        if (showMessage) {
            const timer = setInterval(() => {
                setProgress((prevProgress) => prevProgress - 20);
            }, 500);

            if (progress <= 0) {
                clearInterval(timer);
                setShowMessage(false);
                setProgress(100);
            }

            return () => {
                clearInterval(timer);
            };
        }
    }, [showMessage, progress]);

    const characterCount = message.length;

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, []);

    return (
        <div className="form-container z-2">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Qual seu nome?</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={handleNameChange}
                        ref={nameInputRef}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Qual seu e-mail?</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Mensagem</label>
                    <textarea
                        name="textarea"
                        id="textarea"
                        rows={10}
                        cols={50}
                        required
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <div className="character-count">{characterCount} caracteres</div>
                </div>
                <button className="form-submit-btn btn" type="submit">
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
                {showMessage && (
                    <div className="alert alert-success" role="alert">
                        Mensagem enviada com sucesso!
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: `${progress}%` }}
                                aria-valuenow={progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Forms;
