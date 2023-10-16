import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';


export default function App() {
  const [school, setSchool] = useState([
    {name: 'BISU-MAIN CAMPUS', id: '1' },
    {name: 'BISU-BALILIHAN CAMPUS', id: '2'},
    {name: 'BISU-BILAR CAMPUS', id: '3'},
    {name: 'BISU-CALAPE CAMPUS', id: '4'},
    {name: 'BISU-CANDIJAY CAMPUS', id: '5'},
    {name: 'BISU-CLARIN CAMPUS', id: '6'},
   
  ]);
}
  const longPressHandler = (id )=> {
    console.log(id);
    setSchool((prevSchool) => {
      return prevSchool.filter(todo => todo.id != id)

    })
  }


    return( 
   <View styles={styles.container}>

    <FlatList
    numColumns={2}
    keyExtractor={(item) => item.id}
    data={school}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => longPressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
      
    )}
    />

     {/* <ScrollView>
     {school.map(item => {
      return (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      )
     })}
    </ScrollView> */}
  
    </View>
  );
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal:20,
  },
  item: {
    marginTop: 100,
    padding:12,
    backgroundColor: 'purple',
    fontSize:12,
    marginHorizontal: 8,
    marginTop: 30,
  }
});
