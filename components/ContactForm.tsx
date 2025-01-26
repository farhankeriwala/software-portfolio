'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Switch } from '@/components/ui/shadcn/switch';
import { Alert, AlertDescription } from "@/components/ui/shadcn/alert"
import Loader from "@/components/Loader";
import Link from "next/link";


interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY) {
            console.error('API key is not set.');
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log('Form submitted successfully:', result);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                setIsPrivacyAgreed(false);
                setAlertMessage('Form submitted successfully');
                setShowAlert(true);
            } else {
                setAlertMessage('Form submission failed. Try again later.');
                setShowAlert(true);
                console.error('Form submission failed:', result);
            }
        } catch (error) {
            console.error('An error occurred during form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="max-w-3xl mx-auto" onSubmit={handleFormSubmit}>
            {
                isSubmitting && <Loader/>
            }
            {
                showAlert && <Alert className={"my-12"}>
                    <AlertDescription>
                        {alertMessage}
                    </AlertDescription>
                </Alert>
            }

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-neutral-900">
                        First name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            autoComplete="given-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-600"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-neutral-900">
                        Last name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            autoComplete="family-name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-600"
                            required
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-600"
                            required
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-900">
                        Message
                    </label>
                    <div className="mt-2.5">
            <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-neutral-900 outline outline-1 outline-neutral-300 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-600"
                required
            />
                    </div>
                </div>
                <div className={"col-span-full"}>
                    <p className={"font-poppins text-xs"}>Please allow 5-7 business days for your enquiry to be answered.</p>
                </div>
                <div className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                        <Switch
                            checked={isPrivacyAgreed}
                            onCheckedChange={setIsPrivacyAgreed}
                            id="privacy-policy"
                        />
                    </div>
                    <label htmlFor="privacy-policy" className="text-sm font-poppins text-neutral-600">
                        By selecting this, you agree to the&nbsp;
                        <Link href="/privacy-policy" className="font-semibold underline text-neutral-600">
                            privacy policy
                        </Link>
                        .
                    </label>
                </div>
            </div>

            <div className="mt-10">
                <button
                    type="submit"
                    disabled={!isPrivacyAgreed || isSubmitting}
                    className="block w-full disabled:bg-opacity-75 disabled:cursor-not-allowed rounded-md bg-neutral-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
