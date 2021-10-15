import React, { useState } from "react";
import { View } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import Button from "ui/components/inputs/Button/Button";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

const EncontrarDiaristas: React.FC = () => {
  const [cep, setCep] = useState("");
  return (
    <View>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos profissionais da sua localidade"
        }
      />

      <TextInputMask
        value={cep}
        onChangeText={setCep}
        type={"custom"}
        options={{
          mask: "99.999-999",
        }}
        customTextInput={TextInput}
        customTextInputProps={{
          label: "Digite seu CEP",
        }}
      />

      <Button mode={"contained"} style={{ marginTop: 32 }}>
        Buscar
      </Button>

      <UserInformation 
      name={'Wslmacieira'}
      rating={3}
      picture={'https://github.com/akirahanashiro.png'}
      description={'São Paulo'}
      />
    </View>
  );
};

export default EncontrarDiaristas;
