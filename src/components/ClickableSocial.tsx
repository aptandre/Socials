import { AppColors } from "../constants/colors";

interface ClickableSocialProps {
    label: string;
    link: string;
}

const ClickableSocial = ({ label, link }: ClickableSocialProps) => {
    return (
        <a style={{
            width: '80%',
            height: '10%',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: AppColors.ACTION,
            color: AppColors.WHITE
        }}
        href={link}
        target="_blank">
             {label}
        </a>
    )
}

export default ClickableSocial;