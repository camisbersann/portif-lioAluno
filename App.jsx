import { View, Text, Image, ScrollView } from "react-native";
import camila from "./data/camila";
import CardPrincipal from "./components/CardPrincipal";
import CardProjects from "./components/CardProjects";

export default function App() {
  return (
    
    <View className={`p-12 bg-pink-100 w-screen h-screen`}>
      <ScrollView>
       <CardPrincipal Aluno={camila}></CardPrincipal>
        <CardProjects projeto={camila.projetos}></CardProjects>
        </ScrollView>
          </View>
         

  );
}
