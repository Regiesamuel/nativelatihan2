
import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import {LookupModal} from 'react-native-lookup-modal'
import 'react-native-gesture-handler'
import CheckBox from 'react-native-check-box'

let users = [
  {
      id: 1,
      name: 'Kristen Protestan',
  },
  {
      id: 2,
      name: 'Katolik',
  },
  {
      id: 3,
      name: 'Hindu',
  },

  {
    id: 4,
    name: 'Buddha',
  }
];

export default class tampilan extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      chosenAndroidTime: '00:00',
      androidDate: `${new Date().getUTCDate()}/${new Date().getUTCMonth() 
                    + 1}/${new Date().getUTCFullYear()}`,
      value: 50,
      tanggal: "Test",
      dateText: "Pick a Date",
      date:"2000-01-1",
      agama: "Pilih Agama Anda ",
      isChecked: false,
      isChecked2: false,
      isChecked3: false,
    };
   }

   _onPressButton() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    Alert.alert(date + '-' + month + '-' + year+" Jam: "+
    hours + ':' + min + ':' + sec );
  }
  
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>
          <Text>Nama: </Text>
          <TextInput
            placeholder="Masukan Nama Anda"
            placeholderTextColor="#ed154f"
            style={styles.textinput}          
          />
          <Text>Tanggal Lahir</Text>
          <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate= "1940-01-01"
          maxDate= "2100-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        /> 
        <Text>Agama</Text> 
        <LookupModal
          data={users}
          onSelect={item => {
            {this.setState({agama: item.name})};
          }}
          displayKey={"name"}
          selectText={this.state.agama}
        />
        <Text>Hobi: </Text>
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked
              })
            }}
            isChecked={this.state.isChecked}
            leftText={"Berenang"}
        />
        <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>{
              this.setState({
                  isChecked:!this.state.isChecked2
              })
            }}
            isChecked={this.state.isChecked2}
            leftText={"Nonton"}
        />
        <Button
          onPress={this._onPressButton}
          title="Submit"
        /> 
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   backgroundColor: '#73eb5e',
  },

  buttonContainer: {
    margin: 20,
    borderRadius: 5
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  textinput: {
    borderColor: "black",
    borderWidth: 1, 
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginTop:20,
    marginBottom: 20,
  },
  checkboxContainer2: {
    flexDirection: "row",
    marginTop:20,
    marginBottom: 20,
  },
  checkboxContainer3: {
    flexDirection: "row",
    marginTop:20,
    marginBottom: 20,
  },
})
