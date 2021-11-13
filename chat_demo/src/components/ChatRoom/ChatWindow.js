import React from 'react'
import styled from 'styled-components';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Tooltip, Avatar, Form, Input } from 'antd';
import Message from './Message';


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &_info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &_title {
      margin: 0;
      font-weight: bold;
    }

    &_description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

export default function ChatWindow() {
    return (
        <WrapperStyled>
            <HeaderStyled>
                <div className="header_info">
                    <p className="header_title">Room1</p>
                    <span className="header_description">Day la Room1</span>
                </div>
                <ButtonGroupStyled>
                    <Button icon={<UserAddOutlined />} type="text">Moi</Button>
                    <Avatar.Group size='small' maxCount={2}>
                        <Tooltip title='A'>
                            <Avatar>A</Avatar>
                        </Tooltip>
                        <Tooltip title='A'>
                            <Avatar>B</Avatar>
                        </Tooltip>
                        <Tooltip title='A'>
                            <Avatar>C</Avatar>
                        </Tooltip>
                        <Tooltip title='A'>
                            <Avatar>D</Avatar>
                        </Tooltip>
                    </Avatar.Group>
                </ButtonGroupStyled>
            </HeaderStyled>
            <ContentStyled>
                <MessageListStyled>
                    <Message>

                    </Message>
                </MessageListStyled>
                <FormStyled>
                    <Form.Item>
                        <Input placeholder='Nhập tin nhắn...' bordered={false} autoComplete="off"/>
                    </Form.Item>
                    <Button type='primary'>Gui</Button>
                </FormStyled>
            </ContentStyled>
        </WrapperStyled>
    )
}
