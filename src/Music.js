// importing
import React from 'react';
import { ListGroup } from 'react-bootstrap';
class Music extends React.Component{
    render(){
        return(
            // music screen
            <div style={styles.musicScreen} id='music-screen'>
                <div style={styles.menuList} id='menu-list'>
                    {/* title bar */}
                    <div style={styles.titleBar}>
                            <p style={{fontWeight:'bold'}}>iPod</p>
                            <img style={styles.battery} src="https://image.flaticon.com/icons/svg/3103/3103446.svg"></img>
                    </div>
                    {/* list of options under music */}
                    <ListGroup  style={{borderRadius:'0'}}>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='MyMusic'?'active':''}>
                            My Music {this.props.activeItem==='MyMusic'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                        <ListGroup.Item style={{border:'0',padding: '0.2rem 0.6rem'}} className={this.props.activeItem==='Artists'?'active':''}>
                            Artists {this.props.activeItem==='Artists'?<span style={{float:'right' ,fontWeight:'bold'}}>&gt;</span>:''}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                {/* right side image */}
                <div style={styles.imageContainer} id='image-container'>
                </div>
            </div>
        );
    }   
}
// styling for music
const styles = {
    musicScreen : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirecton : 'row'
    },
    menuList : {
        height : '100%',
        width : '50%',
        boxShadow: '10px 0px 15px -5px rgba(0,0,0,0.75)',
        zIndex : '1'
    },
    imageContainer : {
        height : '100%',
        width : '50%',
        backgroundImage : 'url("https://i.pinimg.com/originals/b5/ca/9a/b5ca9a6c64b6a5c445dc993dd6294d10.jpg")',
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        borderRadius : '0 12px 12px 0'
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'
    },
    battery :{
        width : '20px',
        height: '20px',
    }
}


export default Music;