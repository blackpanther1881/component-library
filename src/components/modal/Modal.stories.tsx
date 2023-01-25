import { Button } from '../button';
import Modal, {ModalProps} from "./Modal";
import React, {useState} from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

const BASE = ({closeButton, staticBackDrop, footer, animate}: ModalProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleModal = () => {
      setIsOpen(!isOpen)
    }
    const handleModalClose = () => {
        setIsOpen(false)
    }
    return (
        <>
        <Button
            name={"buttonConnect"}
            className="
         w-full md:py-2 md:text-sm"
            variant="custom"
            scale="lg"
            isDisabled={false}
            onClick={handleModal}
            customButtonClass={"bg-black-800 text-light-high"}
        >
            open
        </Button>
        <div>
            <Modal
                show={isOpen}
                onClose={handleModalClose}
                header="modal Header"
                closeButton={closeButton}
                staticBackDrop={staticBackDrop}
                footer={footer}
                animate={animate}
            >
                <p>modal Body</p>
            </Modal>
            </div>
        </>
    )
}
export default {
    title: "Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;


const Template: ComponentStory<typeof BASE> = (args) => <BASE {...args}  children={<p>test</p>}/>;

export const BasicModal = Template.bind({});
BasicModal.args = {
    closeButton:false,
    staticBackDrop:true
} as ModalProps;

export const CloseButton = Template.bind({});
CloseButton.args = {
    closeButton:true,
    staticBackDrop:true,
} as ModalProps;

export const StaticBackdrop = Template.bind({});
StaticBackdrop.args = {
    closeButton:false,
    staticBackDrop:false
} as ModalProps;

export const Footer = Template.bind({});
Footer.args = {
    closeButton:false,
    staticBackDrop:false,
    footer:<p>footer</p>
} as ModalProps;

export const ModalAnimate = Template.bind({});
ModalAnimate.args = {
    closeButton:false,
    staticBackDrop:false,
    animate:true
} as ModalProps;