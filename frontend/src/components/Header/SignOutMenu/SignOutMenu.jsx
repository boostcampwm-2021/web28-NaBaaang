import React from 'react';
import { ReactComponent as CameraIcon } from '@/assets/images/camera-icon.svg';
import { ReactComponent as ProfileIcon } from '@/assets/images/profile-icon.svg';
import { Box, IconButton, DropDown } from '@/components/Common';
import useSignOutMenu from '../hooks/useSignOutMenu';

export default function SignOutMenu() {
    const { openChannelModal, openNicknameModal, signOutHandler } =
        useSignOutMenu();

    const profileDropDownItems = () => {
        const items = [
            ['닉네임 변경', openNicknameModal],
            ['로그아웃', signOutHandler],
        ];

        const dropDownItems = items.map(([text, handler]) => {
            return { text, handler };
        });

        return dropDownItems;
    };

    return (
        <Box>
            <IconButton size="large" type="square" onClick={openChannelModal}>
                <CameraIcon />
            </IconButton>

            <DropDown
                toggleButtonChild={
                    <IconButton type="square" size="large">
                        <ProfileIcon />
                    </IconButton>
                }
                items={profileDropDownItems()}
                contentPos={{ top: '4rem', right: '0' }}
            />
        </Box>
    );
}
