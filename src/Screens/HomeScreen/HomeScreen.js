import { MainHeader, ListView } from "@Component";
import React, { Component } from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import * as resources from '../../Resources';
import styles from "./HomeScreenStyle";
import {getPetAction, addPetAction, updatePetAction, removePetAction} from './../../Store/pet';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        
        const { pets } = this.props.petReducer;

        this.state = {
            activeIndex:0,
            carouselItems: [1, 2, 3, 4, 5, 6],
            list: pets
        };
        this.listView = React.createRef(); 

        console.log("Total Pets: ", pets.length);

        if (pets.length == 0) {
            this.lastId = 2;
            this.props.getPetAction({}, this.props.navigation);
            setTimeout(() => {
                this._refreshList();
            }, 100);
        }
        else {
            this.lastId = pets[pets.length-1]['id'];
            console.log("lastId ", this.lastId);
        }
    }

    _refreshList() {
        const { pets } = this.props.petReducer;
        if (pets.length == 0) {
            setTimeout(() => {
                this._refreshList();
            }, 100);
        }
        else {
            this.lastId = pets[pets.length-1]['id'];
            console.log("lastId ", this.lastId);
            this.setState({ list: pets}, () => this.listView.current.refreshList(pets));
        }
    }

    _renderCarouselItem = ({item, index}) => {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.sliderImage} resizeMode={'stretch'} source={resources['SLIDER'+item]} />
            </View>
        );
    }

    _addItem = () => {
        this.props.navigation.navigate('AddPet', { 
            lastId: this.lastId, 
            callback: (newItem) => {
                this.props.addPetAction(newItem);
                this.setState(
                    {list: [...this.state.list, newItem]}, 
                    () => this.listView.current.refreshList(this.state.list)
                );
                this.lastId++;
            }
        });
    }

    _editItem = (itemEdit) => {
        this.props.navigation.navigate('AddPet', { 
            itemEdit: itemEdit,
            callback: (updatedItem) => {
                this.props.updatePetAction(updatedItem);
                let arrPets = this.state.list;

                // update item
                for (let i=0; i<arrPets.length; i++) {
                    if (arrPets[i].id === updatedItem.id) {
                        arrPets[i] = updatedItem;
                        break;
                    }
                }
                this.setState({list: arrPets}, () => this.listView.current.refreshList(arrPets))
            }
        });
    }

    _deleteItem = (itemDelete) => {
        Alert.alert(
            "Pets",
            "Are you sure want to delete this item?",
            [
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Yes", onPress: () => {
                    this.props.removePetAction(itemDelete);

                    let arrPets = this.state.list;
                    arrPets = arrPets.filter(pet => pet.id !== itemDelete.id)
                    this.setState({list: arrPets}, () => this.listView.current.refreshList(arrPets))
                }
              }
            ]
          );
    }

    _renderItem = ({ item }) => {
        return(
            <View style={[styles.listContainer]}>
                <View style={[styles.colorRound]}>
                    <Image style={styles.imageRound} resizeMode={'stretch'} source={{uri:item.image}} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.breed}>{item.breed}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={ () => this._deleteItem(item)}>
                        <Icon name="trash-2" size={25} color={'#000'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={ () => this._editItem(item)}>
                        <Icon name="edit" size={25} color={'#000'} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <MainHeader centerTitle={'Dashboard'} 
                    navigationProps={this.props.navigation} 
                    leftIcon={'menu'}
                    rightIcon={'plus-circle'}
                    _onRightAction={this._addItem}/>
                <View style={styles.carouselContainer}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        renderItem={this._renderCarouselItem} 
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
                <View style={styles.line}></View>
                <View style={styles.listMain}>
                    <ListView 
                    ref={this.listView}
                    data={this.state.list} 
                    renderItemFun={this._renderItem}></ListView>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        petReducer: state.pet
    };
};

const mapActionCreators = {getPetAction, addPetAction, updatePetAction, removePetAction};

export default connect(mapStateToProps, mapActionCreators)(HomeScreen);
