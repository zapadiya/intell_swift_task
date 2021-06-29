import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './GalleryScreenStyles';
import {MainHeader} from "@Component";
import * as resources from '../../Resources';

class GalleryScreen extends React.Component {
  	constructor(props) {
		super(props);
		this.state = {
			activeUser:{}
		}
	}

	componentDidMount(){
		
	}

	componentWillReceiveProps(nextProps){
		
	}

  	render() {
		return (
			<View style={styles.mainContainer}>
				<MainHeader centerTitle={'ગેલેરી'} navigationProps={this.props.navigation} leftIcon={'menu'}/>
				<ScrollView contentContainerStyle={styles.container}>
					<View style={styles.rowItems}>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY2} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY3} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
					</View>
					<View style={styles.rowItems}>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY4} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY5} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY3} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
					</View>
					<View style={styles.rowItems}>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
						<View style={styles.itemsContainer}>
							<Image style={styles.itemsImage}  source={resources.GALLERY1} />
							<View style={styles.itemsTitle}>
								<Text style={styles.menuTitle}>{'શિક્ષણ'}</Text>
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		);
  	}
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapActionCreators = {};

export default connect(mapStateToProps	,mapActionCreators)(GalleryScreen);