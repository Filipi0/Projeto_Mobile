import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Modal } from "react-native";
import InputField from "./components/Input";
import SubmitButton from "./components/Submit";

export default function App() {
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddVehicle = () => {
    if (!model || !year || !price) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    const newVehicle = { id: Date.now().toString(), model, year, price };
    setVehicles([...vehicles, newVehicle]);
    setModel("");
    setYear("");
    setPrice("");
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageRow}>
        <Image
          source={require("./assets/patrocinador.webp")}
          style={styles.image}
        />
        <Image source={require("./assets/carros1.jpg")} style={styles.image} />
      </View>

      {/* Títulos */}
      <Text style={styles.title}>Cadastre seu veículo</Text>
      <Text style={styles.subtitle}>Ka-chow!</Text>

      <InputField placeholder="Modelo" value={model} onChangeText={setModel} />
      <InputField
        placeholder="Ano"
        value={year}
        onChangeText={setYear}
        keyboardType="numeric"
      />
      <InputField
        placeholder="Preço"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <SubmitButton title="Cadastrar" onPress={handleAddVehicle} />

      {/* Lista de Veículos */}
      <Text style={styles.listTitle}>Lista de veículos</Text>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Text style={styles.listItem}>
            {index + 1}. {item.model} - {item.year} - {item.price}
          </Text>
        )}
      />

      {/* Modal de Sucesso */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image
              source={require("./assets/logoCars.png")}
              style={styles.modalImage}
            />
            <Text style={styles.modalTitle}>Veículo cadastrado</Text>
            <Text style={styles.modalSubtitle}>com sucesso!</Text>
            <SubmitButton title="Ok" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    padding: 20,
    alignItems: "center",
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    marginVertical: 50,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 20,
  },
  listItem: {
    fontSize: 16,
    backgroundColor: "#ffff66",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    color: "#000",
    fontWeight: "bold",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 140,
    height: 80,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    color: "#ff0000",
    textAlign: "center",
  },
  modalSubtitle: {
    fontSize: 18,
    color: "#ff0000",
    textAlign: "center",
    marginBottom: 20,
  },
});
