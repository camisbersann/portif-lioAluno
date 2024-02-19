import { View, Text, Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CardPrincipal = ({ Aluno }) => {
    return(
        <View>
            <View>
                <Image source = {require('../images/camila02.jpeg')} className={`w-72 h-72 rounded-xl border-solid m-2`}>
                </Image>
            </View>

            <View >
                <Text className = {`text-2xl text-black font-bold text-center m1`}>
                {Aluno.name}
                </Text>
            </View>

            <View>
                <Text className = {`text-sm text-black text-center m1`}>
                    {Aluno.curso} no {Aluno.semestre} semestre
                </Text>
            </View>

        <View>
            <Text className={`text-lg text-black text-justify m-2`}>
            {Aluno.descricao}
          </Text>
          </View>

          <View className={`border-2 border-zinc-900 border-solid m-1 `}></View>

        <View>
            <Text className={`text-xl text-black font-bold text-justify m-2 text-center`}>
            TECNOLOGIAS
          </Text>

          <View className={`flex-row gap-2 place-items-center flex items-center justify-center`}>
          <AntDesign name="github" size={40} color="black" /> 
          <FontAwesome5 name="react" size={40} color="black" />
          <FontAwesome5 name="node-js" size={40} color="black" />
          <Ionicons name="logo-javascript" size={40} color="black" />
          </View>

          </View>

         

          <View className={`border-2 border-zinc-900 border-solid m-4 `}></View>

            <View>
          <Text className={`text-xl font-bold text-black text-justify m-4 text-center `}>
             PROJETOS
            </Text>
            </View>

        </View>
    )
}

export default CardPrincipal;