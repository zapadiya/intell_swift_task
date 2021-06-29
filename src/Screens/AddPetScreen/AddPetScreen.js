import { MainHeader } from "@Component";
import React, {Component} from 'react';
import {SafeAreaView, View, TextInput, Text} from 'react-native';
import styles from "./AddPetScreenStyle";
import {connect} from "react-redux";
import{Button} from 'react-native-elements';
import {isEmpty} from './../../Utility/Validation';
import {loginAction} from './../../Store/user';
import LinearGradient from 'react-native-linear-gradient';
import { color } from "../../Constants/Color";
import {addPetAction, updatePetAction} from './../../Store/pet';

const CHEAT = 0

class AddPetScreen extends Component {
    constructor(props) {
        super(props);
		
        this.state = {
            name: '',
            nameError: '',
            breed: '',
            breedError: '',
			description: '',
            descriptionError: '',
			image: 'https://cdn.britannica.com/s:800x1000/68/160068-050-53FE2889/Snowshoe-cat.jpg',
        };

		this.itemEdit = this.props.route.params.itemEdit;
		if (this.itemEdit) {
			this.state.id = this.itemEdit.id;
			this.state.name = this.itemEdit.name;
			this.state.breed = this.itemEdit.breed;
			this.state.description = this.itemEdit.description;
			this.state.image = this.itemEdit.image;

			this.title = "Update Pet";
		}
		else {
			this.title = "Add Pet";

			let newId = this.props.route.params.lastId + 1;

			if (CHEAT) {
				this.state.id = newId;
				this.state.name = 'Poetic ' + newId;
				this.state.breed = 'Snowshoe';
				this.state.description = 'A white cat named White Boy is the pet of an artistic girl named Justice (Janet Jackson) in the John Singleton film Poetic Justice (1993).';
			}
			else {
				this.state.id = newId;
			}
		}
    }

	_validate() {
		let isvalid = true;
		if(isEmpty(this.state.name)){
			this.setState({nameError: 'Please enter pet name.'})
			isvalid = false;
		}
		if(isEmpty(this.state.breed)){
            this.setState({breedError: 'Please enter breed.'})
			isvalid = false;
		}
		if(isEmpty(this.state.description)){
            this.setState({descriptionError: 'Please enter description.'})
			isvalid = false;
		}
		return isvalid;
	}

	_savePet = () => {
		if (this._validate()) {
			var item = {
				id: this.state.id,
				name: this.state.name,
				image: this.state.image,
				breed: this.state.breed,
				description: this.state.description
			};
			this.props.route.params.callback(item);
			this.props.navigation.goBack();
		}
	}

    render() {
        return (
            <View style={styles.container}>
				<MainHeader centerTitle={this.title} 
                    	navigationProps={this.props.navigation} 
                    	leftIcon={'chevron-left'}
                    	_onLeftAction={() => { this.props.navigation.goBack()}}/>
				
				<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
					
					<View style={styles.formContainer}>
						<TextInput style={styles.inputBox} placeholder="Enter pet name" onChangeText={text => {this.setState({name: text}); this.setState({nameError:''})}} defaultValue={this.state.name}/>
						<Text style={styles.inputError}>{this.state.nameError != ''?this.state.nameError: ''}</Text>
						<TextInput style={styles.inputBox} placeholder="Enter breed" onChangeText={text => {this.setState({breed: text}); this.setState({breedError: ''})}} defaultValue={this.state.breed}/>
						<Text style={styles.inputError}>{this.state.breedError != ''?this.state.breedError: ''}</Text>
						<TextInput multiline={true} style={styles.inputBox} placeholder="Enter description" onChangeText={text => {this.setState({description: text}); this.setState({descriptionError: ''})}} defaultValue={this.state.description}/>
                        <Text style={styles.inputError}>{this.state.descriptionError != ''?this.state.descriptionError: ''}</Text>
						<LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0}} colors={[color._PRIMARY, color._SECONDARY, color._THIRD]} style={styles.linearGradient}>
							<Button	title={'Save'} type={'solid'}	onPress={() => {this._savePet()}} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle}/>
						</LinearGradient>
					</View>
				</SafeAreaView>
			</View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapActionCreators = {addPetAction, updatePetAction};

export default connect(mapStateToProps, mapActionCreators)(AddPetScreen);
