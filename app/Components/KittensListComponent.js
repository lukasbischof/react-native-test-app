import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import TableView from 'react-native-tableview';

export default class KittensListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      kittens: [
        {'name': 'Fluffy'}, 
        {'name': 'Kitty'},
        {'name': 'Tiger'},
        {'name': 'Milo'},
        {'name': 'Luna'},
        {'name': 'Callie'},
        {'name': 'Smoky'},
        {'name': 'Fluffy'}, 
        {'name': 'Kitty'},
        {'name': 'Tiger'},
        {'name': 'Milo'},
        {'name': 'Luna'},
        {'name': 'Callie'},
        {'name': 'Smoky'},
      ]
    };
  }

  tableViewCellPressed = (e) => {
    const { navigate } = this.props.navigation;
    const selectedKitten = this.state.kittens[e.selectedIndex];
    navigate('Details', {kitten: selectedKitten});
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TableView
          style={{ flex: 1 }}
          onPress={this.tableViewCellPressed}>
          <TableView.Section>
            {this.state.kittens.map((kitten, index) => <TableView.Item key={index}>{ kitten.name }</TableView.Item>)}
          </TableView.Section>
        </TableView>
      </View>
    );
  }
}

export class KittenDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = props.navigation.state.params;
  }

  render() {
    return (
      <View>
        <FormLabel>Kitten Name</FormLabel>
        <FormInput value={this.state.kitten.name} />
        <Button
          large
          title="Save"
          icon={{name: 'save'}}
          style={{marginTop: 30, backgroundColor: '#ff2200'}} />
      </View>
    );
  }
}