import { View, Text, Image } from "react-native";

const CardProjects = ({ projeto }) => {
    return (
        <View className={`flex-auto flex-row flex-wrap`}>
            {
                projeto.map((projeto, index) => {
                    return (
                        <View key={index}>
                            <View>
                                <View>
                                    <Image source={projeto.imagem} />
                                </View>

                                <View>
                                    <Text className={`text-lg text-black text-justify m-3 list-disc text-center`}>
                                        {projeto.name}
                                    </Text>
                                </View>
                                <View>
                                    <Text className={`text-sm text-center m-0.5`}>
                                        {projeto.descricao}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    );
}
export default CardProjects;