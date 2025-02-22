import React from "react"
import { Button } from "react-native";

type botaoProps = {
    titulo: string;
    onPress: () => void;
}

const Botao:React.FC<botaoProps> = ({titulo, onPress}) => {
    return(
        <Button onPress={onPress} title={titulo} color={"#836FFF"}></Button>
    );
}

export default Botao;