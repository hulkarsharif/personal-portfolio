import { useState } from "react";
import styled from "styled-components";

import { Typography, Modal, Input, Button } from "../../../design-system";

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

const CreateContactUsModal: React.FC<ModalProps> = ({ show, closeModal }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

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

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="h6" weight="medium">
                Contacts
            </ModalTitle>
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
                value={taskDescription}
                onChange={() => {}}
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
                    onClick={() => {}}
                >
                    Send Message
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateContactUsModal };
// import React from "react";
// import { useState } from "react";
// import styled from "styled-components";
// import emailjs from "emailjs-com";

// import { Typography, Modal, Input, Button } from "../../../design-system";
// import { click } from "@testing-library/user-event/dist/click";

// type ModalProps = {
//     show: boolean;
//     closeModal: () => void;
// };

// const ModalTitle = styled(Typography)`
//     margin-bottom: var(--space-20);
// `;

// const Inputs = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: var(--space-16);
//     margin-bottom: var(--space-24);
// `;

// const Buttons = styled.div`
//     display: flex;
//     padding-top: 2rem;
//     gap: var(--space-12);
// `;

// const ContactForm: React.FC<ModalProps> = ({ show, closeModal }) => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [description, setDescription] = useState("");

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

//     const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
//         e.preventDefault();

//         emailjs
//             .sendForm(
//                 "service_s6l4xrc",
//                 "template_vhnq3vn",
//                 e.target as HTMLFormElement,
//                 "rsxyDJvrOcvAQKnQc"
//             )
//             .then(
//                 (result) => {
//                     console.log(result.text);

//                     closeModal();
//                 },
//                 (error) => {
//                     console.log(error.text);
//                 }
//             );
//     };

//     return (
//         <Modal show={show} position="center">
//             <form onSubmit={handleSubmit}>
//                 <ModalTitle variant="h6" weight="medium">
//                     Contacts
//                 </ModalTitle>
//                 <Inputs>
//                     <Input
//                         type="text"
//                         placeholder="First Name"
//                         value={firstName}
//                         onChange={handleOnChangeFirstName}
//                         shape="rounded"
//                         size="lg"
//                     />

//                     <Input
//                         type="text"
//                         placeholder="Last Name"
//                         value={lastName}
//                         onChange={handleOnChangeLastName}
//                         shape="rounded"
//                         size="lg"
//                     />

//                     <Input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={handleOnChangeEmail}
//                         shape="rounded"
//                         size="lg"
//                     />

//                     <Input
//                         type="tel"
//                         placeholder="Phone number"
//                         shape="rounded"
//                         size="lg"
//                         value={phone}
//                         onChange={handleOnChangePhone}
//                     />

//                     <Input
//                         labelText="Message"
//                         type="textarea"
//                         placeholder="Message or Description"
//                         shape="rounded"
//                         size="lg"
//                         value={description}
//                         onChange={(value: string) => setDescription(value)}
//                     />
//                 </Inputs>

//                 <Buttons>
//                     <Button
//                         className="your-button-class"
//                         shape="circle"
//                         color="secondary"
//                         onClick={closeModal}
//                     >
//                         Cancel
//                     </Button>

//                     <Button
//                         className="your-button-class"
//                         shape="circle"
//                         color="secondary"
//                         type="submit"
//                     >
//                         Send Message
//                     </Button>
//                 </Buttons>
//             </form>
//         </Modal>
//     );
// };

// export { ContactForm };
