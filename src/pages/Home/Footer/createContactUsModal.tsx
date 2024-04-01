import { useState, useRef } from "react";
import styled from "styled-components";
import { Typography, Modal, Input, Button } from "../../../design-system";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type ModalProps = {
    show: boolean;
    closeModal: () => void;
};
const ModalTitle = styled(Typography)`
    margin-bottom: var(--space-20);
`;
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;
const Buttons = styled.div`
    display: flex;
    padding-top: 2rem;
    gap: var(--space-12);
`;

const FormWrapperInput = styled.form``;

const CreateContactUsModal: React.FC<ModalProps> = ({ show, closeModal }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };
    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };
    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };
    const handleOnChangePhone = (value: string) => {
        setPhone(value);
    };
    const handleOnChangeMessage = (value: string) => {
        setMessage(value);
    };

    const form = useRef<HTMLFormElement | null>(null);
    const isFormSubmittable =
        firstName && lastName && email && phone && message;

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

        setIsFormSubmitting(true);

        if (form.current) {
            emailjs
                .sendForm(serviceId, templateId, form.current, {
                    publicKey: publicKey
                })
                .then(
                    () => {
                        setIsFormSubmitting(false);

                        toast.success(
                            "Thank you! I have received your message."
                        );
                    },
                    () => {
                        setIsFormSubmitting(false);
                        setIsError(true);
                        toast.error(
                            "Oops. There was a problem! Please email me at sharipovah01@gmail.com"
                        );
                    }
                );
        }
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="h6" weight="medium">
                Contacts
            </ModalTitle>
            <FormWrapperInput>
                <Inputs>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleOnChangeFirstName}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleOnChangeLastName}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
                <Input
                    type="tel"
                    placeholder="Phone number"
                    shape="rounded"
                    size="lg"
                    value={phone}
                    onChange={handleOnChangePhone}
                />
                <Input
                    labelText="Message"
                    type="textarea"
                    placeholder="Message or Description"
                    shape="rounded"
                    size="lg"
                    value={message}
                    onChange={handleOnChangeMessage}
                />
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="circle"
                        variant="outlined"
                        fullWidth
                        onClick={closeModal}
                    >
                        Cancel
                    </Button>
                    <Button
                        size="lg"
                        shape="circle"
                        color="secondary"
                        variant="outlined"
                        fullWidth
                        disabled={isFormSubmitting || !isFormSubmittable}
                    >
                        Send Message
                    </Button>
                </Buttons>
            </FormWrapperInput>
        </Modal>
    );
};

export { CreateContactUsModal };
