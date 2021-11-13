import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth, db } from '../../firebase/config';
import { addDocument } from '../../firebase/services';
//v6 useHistory -> useNavigate,history.push() = navigate()
// import { useNavigate } from 'react-router-dom';



const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {

    const handleFbLogin = async () => {
        const {additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.displayName,
              providerId: additionalUserInfo.providerId,
             
            });
          }
        };
    
    return (
        <div>
            <Row justify='center' style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center' }} level={3}>
                        MetaPoLyChat
                    </Title>
                    <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng Google</Button>
                    <Button style={{ width: '100%', marginBottom: 5 }} onClick={handleFbLogin}>Đăng nhập bằng FaceBook</Button>
                    <Button style={{ width: '100%' }}>Đăng nhập bằng MetaPoly</Button>
                </Col>
            </Row>
        </div>
    );
}