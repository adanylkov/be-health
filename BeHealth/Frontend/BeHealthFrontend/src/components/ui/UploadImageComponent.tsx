import { useRef } from "react";
import React from "react";

interface UploadImageButton {
    handleUpload: (file: File) => Promise<string>,
    onUpload: (url: string) => void,
    children: React.ReactNode
}

export const UploadImageComponent = ({ handleUpload, onUpload, children }: UploadImageButton) => {
    const hiddenFileInput: React.LegacyRef<HTMLInputElement> = useRef(null)
    const handleClick = () => {
        if (hiddenFileInput.current !== null)
            hiddenFileInput.current.click();
    }
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        if (event.target.files === null)
            return
        const fileUploaded = event.target.files[0]
        const image = await handleUpload(fileUploaded)
        onUpload(image);
    }

    const modifiedChildren = React.cloneElement(children as React.ReactElement, { onClick: handleClick })
    return (
        <>
            {modifiedChildren}
            <input type={"file"}
                ref={hiddenFileInput}
                style={{ display: 'none' }}
                onChange={handleChange}
                accept="image/*" />
        </>
    )
}
