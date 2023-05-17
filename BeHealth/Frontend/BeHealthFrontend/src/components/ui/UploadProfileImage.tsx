import { UploadImageComponent } from "./UploadImageComponent";

interface UploadImageButton {
    src: string,
    className?: string,
    handleUpload: (file: File) => Promise<string>,
    onUpload: (url: string) => void,
}

export const UploadProfileImage = ({ src, className, handleUpload, onUpload }: UploadImageButton) => {
    return (
        <UploadImageComponent children={<img src={src} className={className} />}
                              handleUpload={handleUpload}
                              onUpload={onUpload}
                              />
                              )
}
