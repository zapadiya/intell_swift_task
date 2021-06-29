import React from 'react';
import {ScrollView, View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './VideoScreenStyles';
import {MainHeader} from "@Component";
import * as resources from '../../Resources';
import Modal from 'react-native-modal';
import VideoPlayer from 'react-native-video-player';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class VideoScreen extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			isModelVisible: false
		}
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(nextProps){
		
	}

  	render() {
		return (
			<View style={styles.mainContainer}>
				<MainHeader centerTitle={'વિડિઓ'} navigationProps={this.props.navigation} leftIcon={'menu'}/>
				<ScrollView contentContainerStyle={styles.container}>
					<View style={styles.rowItems}>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY2} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY3} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.rowItems}>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY4} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY5} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY3} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.rowItems}>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.itemsContainer} onPress={() => this.setState({isModelVisible: true})}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
				<Modal visible={this.state.isModelVisible} transparent={true} onBackdropPress={()=>this.setState({isModelVisible: false})}>
					<View style={{backgroundColor: 'rgba(0,0,0,0.30)'}}>
						<VideoPlayer videoWidth={windowWidth} videoHeight={300} video={{uri: 'http://techslides.com/demos/sample-videos/small.mp4'}} />
					</View>
				</Modal>
			</View>
		);
  	}
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapActionCreators = {};

export default connect(mapStateToProps	,mapActionCreators)(VideoScreen);