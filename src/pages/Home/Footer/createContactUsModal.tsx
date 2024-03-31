// import { useRef, useState } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";
// import toast from "react-hot-toast";

// import { Typography, Modal, Input, Button } from "../../../design-system";

// type ModalProps = {
//     show: boolean;
//     closeModal: () => void;
// };

// const ModalTitle = styled(Typography)`
//     margin-bottom: var(--space-20);

//     @media (max-width: 25em) {
//         font-size: 1.4rem;
//     }
// `;

// const Inputs = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: var(--space-16);
//     margin-bottom: var(--space-24);

//     @media (max-width: 25em) {
//         gap: var(--space-8);
//     }
// `;

// const Buttons = styled.div`
//     display: flex;
//     padding-top: 2rem;
//     gap: var(--space-12);

//     @media (max-width: 25em) {
//         flex-direction: column;
//         align-items: center;
//         padding-top: var(--space-8);
//     }
// `;

// const CreateContactUsModal: React.FC<ModalProps> = ({ show, closeModal }) => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [message, setMessage] = useState("");

//     const form = useRef<HTMLFormElement | null>(null);

//     const [isFormSubmitting, setIsFormSubmitting] = useState(false);
//     const [isError, setIsError] = useState<boolean>(false);

//     const handleOnChangeFirstName = (value: string) => {
//         setFirstName(value);
//     };

//     const handleOnChangeLastName = (value: string) => {
//         setLastName(value);
//     };

//     const handleOnChangeEmail = (value: string) => {
//         setEmail(value);
//     };

//     const handleOnChangePhone = (value: string) => {
//         setPhone(value);
//     };
//     const handleOnChangeMessage = (value: string) => {
//         setMessage(value);
//     };

//     const isFormSubmittable =
//         firstName && lastName && email && phone && message;
//     const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//     };

//     const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
//     const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
//     const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

//     setIsFormSubmitting(true);

//     if (form.current) {
//         emailjs
//             .sendForm(serviceId, templateId, form.current, {
//                 publicKey: publicKey
//             })
//             .then(
//                 () => {
//                     setIsFormSubmitting(false);

//                     toast.success("Thank you! I have received your message.");
//                 },
//                 () => {
//                     setIsFormSubmitting(false);
//                     setIsError(true);
//                     toast.error(
//                         "Oops. There was a problem! Please email me at durdona.dev@gmail.com"
//                     );
//                 }
//             );
//     }

//     return (
//         <Modal show={show} position="center">
//             <ModalTitle variant="h6" weight="medium">
//                 Get in Touch
//             </ModalTitle>
//             <Inputs>
//                 <Input
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     onChange={handleOnChangeFirstName}
//                     shape="rounded"
//                     size="md"
//                 />
//                 <Input
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     onChange={handleOnChangeLastName}
//                     shape="rounded"
//                     size="md"
//                 />

//                 <Input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={handleOnChangeEmail}
//                     shape="rounded"
//                     size="md"
//                 />
//             </Inputs>
//             <Input
//                 type="tel"
//                 placeholder="Phone number"
//                 shape="rounded"
//                 size="md"
//                 value={phone}
//                 onChange={handleOnChangePhone}
//             />
//             <Input
//                 labelText="Message"
//                 type="textarea"
//                 placeholder="Message or Description"
//                 shape="rounded"
//                 size="md"
//                 value={message}
//                 onChange={() => {}}
//             />
//             <Buttons>
//                 <Button
//                     color="secondary"
//                     size="lg"
//                     shape="circle"
//                     variant="outlined"
//                     fullWidth
//                     onClick={closeModal}
//                 >
//                     Cancel
//                 </Button>
//                 <Button
//                     size="lg"
//                     shape="circle"
//                     color="secondary"
//                     variant="outlined"
//                     fullWidth
//                     onClick={() => {}}
//                 >
//                     Send Message
//                 </Button>
//             </Buttons>
//         </Modal>
//     );
// };

// export { CreateContactUsModal };

import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

import { Typography, Modal, Input, Button } from "../../../design-system";

type ModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ModalTitle = styled(Typography)`
    margin-bottom: var(--space-20);

    @media (max-width: 25em) {
        font-size: 1.4rem;
    }
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);

    @media (max-width: 25em) {
        gap: var(--space-8);
    }
`;

const Buttons = styled.div`
    display: flex;
    padding-top: 2rem;
    gap: var(--space-12);

    @media (max-width: 25em) {
        flex-direction: column;
        align-items: center;
        padding-top: var(--space-8);
    }
`;

const CreateContactUsModal: React.FC<ModalProps> = ({ show, closeModal }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef<HTMLFormElement | null>(null);

    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [isError, setIsError] = useState<boolean>(false);

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

    const isFormSubmittable =
        firstName && lastName && email && phone && message;

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
                    form.current,
                    process.env.REACT_APP_EMAILJS_USER_ID || ""
                )
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
                            "Oops. There was a problem! Please email me at durdona.dev@gmail.com"
                        );
                    }
                );
        }
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="h6" weight="medium">
                Get in Touch
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="md"
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="md"
                />

                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="md"
                />
            </Inputs>
            <Input
                type="tel"
                placeholder="Phone number"
                shape="rounded"
                size="md"
                value={phone}
                onChange={handleOnChangePhone}
            />
            <Input
                labelText="Message"
                type="textarea"
                placeholder="Message or Description"
                shape="rounded"
                size="md"
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
                    disabled={!isFormSubmittable}
                    onClick={() => {}}
                >
                    {isFormSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateContactUsModal };
