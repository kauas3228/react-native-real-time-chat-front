import { Text } from 'react-native'


interface title {
    title: string;
    color: 'color-textPrimary' | 'color-textSecondary';
}

export default function Title({ title, color }: title) {
    return (
        <Text className={`text-3xl font-LeckerliOne ${color}`}>{title}</Text>
    )
}
