import { SecondaryButton } from "./SecondaryButton"
import { UploadImageComponent } from "./UploadImageComponent";

interface UploadImageButton {
    text: string,
    handleUpload: (file: File) => Promise<string>,
    onUpload: (url: string) => void,
}

export const UploadImageButton = ({ text, handleUpload, onUpload }: UploadImageButton) => {
    return (
        <UploadImageComponent children={<SecondaryButton>{ text }</SecondaryButton>}
                              handleUpload={handleUpload}
                              onUpload={onUpload} />
                              )
}
