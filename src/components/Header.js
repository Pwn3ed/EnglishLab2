import { Text, View, Image } from "react-native";

export function Header() {
    return (
        <View className='header pt-4 flex-row items-center justify-center bg-purple-950'>
          
            {/* <Icon2 name="arrowleft" size={40} color="white" /> */}

            <View className='items-center'>
                <Image className='w-20 h-20' source={require('../../assets/icon.png')}/>
                <Text className='text-4xl text-amber-300'>EnglishLab</Text>
            </View>

            {/* <Icon2 name="menufold" size={40} color="white" /> */}

        </View>
    )
}