import { Text } from 'react-native'

interface titleProps {
    title: string;
    color: 'color-textPrimary' | 'color-textSecondary';
    font: 'LeckerliOne' | 'interBold' | 'ubuntuBold';
}

export default function Title({ title, color, font }: titleProps) {

    // Maps font name to Tailwind class
    
    const fontClasses:  Record<titleProps['font'], string> = {
        LeckerliOne: 'font-LeckerliOne',
        interBold: 'font-interBold',
        ubuntuBold: 'font-ubuntuBold',
    }

    return (
        <Text className={`text-4xl ${fontClasses[font]} ${color}`}>{title}</Text>
    )
}
